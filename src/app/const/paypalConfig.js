import { appSettings } from "@/app/const/settings.js";

export const paypalOptions = {
    clientId: appSettings.PAYPAL_CLIENT_ID,
    currency: "EUR",
    components: "buttons",
};
