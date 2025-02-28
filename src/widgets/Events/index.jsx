import { EventCard } from "@/entities/Event/ui/EventCard/index.jsx";
import styles from "./index.module.css";
import { useNavigate } from "react-router";

export function Events() {
  const navigate = useNavigate();

  const onEventClick = (event_id) => {
    navigate(`/event/${event_id}`);
  };

  return (
    <div className={styles.container}>
      <EventCard
        name="##SUMMER2025"
        photoUrl={"src/shared/assets/example.png"}
        ageGroup={18}
        endAt={"1 JUNE, 2:00"}
        address={"st. Ivan Vazov"}
        startAt={"31 MAY, 22:00"}
        locationName={"Moonlight Club"}
        onClick={() => onEventClick(1)}
      />
    </div>
  );
}
