import styles from "./index.module.css";
import { EventCard } from "@/entities/Event/ui/EventCard/index.jsx";
import { FacebookAPI } from "../../entities/Event/api/facebook.js";

export function EventsList() {
  const events = [
    {
      id: 1,
      poster:
        "https://storage.yandexcloud.net/009project-events/inst%20post.png",
      ticketsURL: "https://partiful.com/e/RO7S0f07M32KXUWFsTCA",
    },
  ];

  const onEventClick = async (ticketsURL) => {
    window.open(ticketsURL);

    const pixelId = 668559042999349;
    const accessToken = import.meta.env.VITE_FACEBOOK_TOKEN;
    const facebookAPI = new FacebookAPI(pixelId, accessToken);
    await facebookAPI.sendViewContentEvent();
  };

  return (
    <div className={styles.container}>
      {events.map((item) => (
        <EventCard
          key={item.id}
          event={item}
          onClick={() => onEventClick(item.ticketsURL)}
        />
      ))}
    </div>
  );
}
