import { EventCard } from "@/entities/Event/ui/EventCard/index.jsx";
import styles from "./index.module.css";

export function Events() {
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
      />
    </div>
  );
}
