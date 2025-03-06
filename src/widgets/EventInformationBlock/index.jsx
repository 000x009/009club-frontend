import styles from "./index.module.css";
import { EventTitle } from "@/entities/Event/ui/EventTitle/index.jsx";
import { Information } from "@/entities/Event/ui/Information/index.jsx";
import { EventMap } from "@/entities/Event/ui/EventMap/index.jsx";

export function EventInformationBlock({event}) {
  return (
    <div className={styles.container}>
      <div className={styles["info-container"]}>
        <div className={styles["info-basic-container"]}>
          <EventTitle
            title={event.title}
            description={event.description}
          />
          <div className={styles["event-info-container"]}>
            <Information
              startAt={event.start_at}
              endAt={event.end_at}
              dressCode={event.dresscode}
            />
            <EventMap
              address={event.location.address}
              latitude={event.location.coordinates.x}
              longitude={event.location.coordinates.y}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
