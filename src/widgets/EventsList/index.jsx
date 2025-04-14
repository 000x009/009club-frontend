import styles from "./index.module.css"
import {EventCard} from "@/entities/Event/ui/EventCard/index.jsx";

export function EventsList() {
    const events = [
        {id: 1, poster: "https://storage.yandexcloud.net/009project-events/inst%20post.png", ticketsURL: "https://partiful.com/e/RO7S0f07M32KXUWFsTCA"},
    ]

    return (
        <div className={styles.container}>
            {events.map((item) => (
                <EventCard key={item.id} event={item} onClick={() => window.open(item.ticketsURL)} />
            ))}
        </div>
    )
}