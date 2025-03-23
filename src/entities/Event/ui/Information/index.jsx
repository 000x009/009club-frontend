import { Text } from "@/shared/ui/Text/index.jsx";
import styles from "./index.module.css";
import cc from "@/shared/lib/helpers/cc.js";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { parseTime } from "@/shared/lib/helpers/parseTime.js";

export function Information({
  className,
  startAt,
  endAt,
  dressCode,
  country,
  ageGroup,
  locationName,
  city,
  ...restProps
}) {
  const dayOptions = {
    month: "long",
    day: "numeric",
  };
  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    weekday: "long",
  };

  return (
    <div className={cc(className, styles.container)} {...restProps}>
      <div className={styles.left__container}>
        <div className={styles.dresscode}>
          <Text className={styles.dresscode_label}>dressc0de</Text>
          <Text className={styles.dresscode_value}>
            {dressCode || <Skeleton />}
          </Text>
        </div>
        <div className={styles.dateTime}>
          <Text>{parseTime(startAt, dayOptions)}</Text>
          <Text className={cc(styles.time)}>
            {parseTime(startAt, timeOptions)}
          </Text>
        </div>
      </div>
      <div className={styles.right__container}>
        <Text className={styles.ageGroup}>
          {ageGroup + "+" || <Skeleton />}
        </Text>
        <div className={styles.location}>
          <Text>{locationName || <Skeleton />}</Text>
          <Text className={styles.city}>
            {city + ", " + country || <Skeleton />}
          </Text>
        </div>
      </div>
    </div>
  );
}
