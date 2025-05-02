export class FacebookAPI {
  baseUrl = "https://graph.facebook.com/";
  apiVersion = "v22.0";

  constructor(pixelId, accessToken) {
    this.pixelId = pixelId;
    this.accessToken = accessToken;
  }

  #generatePayload(eventName, customData) {
    const eventTime = Math.floor(Date.now() / 1000);
    const attributionShare = "0.3";
    const actionSource = "website";

    return {
      data: [
        {
          event_name: eventName,
          event_time: eventTime,
          action_source: actionSource,
          attribution_data: {
            attribution_share: attributionShare,
          },
          user_data: {
            em: [null],
          },
          original_event_data: {
            event_name: eventName,
            event_time: eventTime,
          },
        },
      ],
    };
  }

  async sendViewContentEvent() {
    const payload = this.#generatePayload("ViewContent", null);

    const response = await fetch(
      `${this.baseUrl}${this.apiVersion}/${this.pixelId}/events?access_token=${this.accessToken}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(payload),
      },
    );

    if (!response.ok) {
      const responseJson = await response.json();
      throw new Error(`View Event was not sent. Details: ${responseJson}`);
    }
  }
}
