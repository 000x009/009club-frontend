import styles from "./index.module.css";
import { Text } from "@/shared/ui/Text/index.jsx";
import { EventTitle } from "@/entities/Event/ui/EventTitle/index.jsx";
import { Button } from "@/shared/ui/Button/index.jsx";
import { Information } from "@/entities/Event/ui/Information/index.jsx";
import { EventMap } from "@/entities/Event/ui/EventMap/index.jsx";

export function EventInformationBlock() {
  return (
    <div className={styles.container}>
      <div className={styles["age-group-container"]}>
        <Text className={styles["age-group"]}>18+</Text>
      </div>
      <div className={styles["image-container"]}>
        <img
          className={styles.image}
          src={"/src/shared/assets/example.png"}
          alt={"example"}
        />
      </div>
      <div className={styles["info-container"]}>
        <div className={styles["info-basic-container"]}>
          <EventTitle
            title={"##SUMMR2025"}
            description={
              "Join us for an unforgettable night at the Annual Starry Night Party. Spend the first summer night with us!"
            }
          />
          <div className={styles["event-info-container"]}>
            <Information
              day={"SATURDAY"}
              date={"31 MAY 2025"}
              hours={"22:00 - 2:00"}
              dressCode={"BLACK"}
            />
            <EventMap
              address={"st. Ivan Vazov"}
              latitude={43.20156713789251}
              longitude={27.92344835953124}
            />
          </div>
        </div>
        <Button>CHOOSE TICKETS</Button>
      </div>
    </div>
  );
}
