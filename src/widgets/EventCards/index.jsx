import { EventCard } from "@/entities/Event/ui/EventCard/index.jsx";
import { useNavigate } from "react-router";
import styles from "./index.module.css";
import { EventCardSkeletons } from "@/widgets/EventCardSkeletons/index.jsx";

export function EventCards({ events, isFetchingNextPage, isLoading, total }) {
  const navigate = useNavigate();
  const onEventClick = (event_id) => {
    navigate(`/event/${event_id}`);
  };

  return (
    <div className={styles.container}>
      {total > 0 &&
        events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onClick={() => onEventClick(event.id)}
          />
        ))}
      {(isFetchingNextPage || isLoading) && <EventCardSkeletons />}
    </div>
  );
}
