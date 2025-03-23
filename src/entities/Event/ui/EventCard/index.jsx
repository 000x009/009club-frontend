import cc from "@/shared/lib/helpers/cc.js";
import styles from "./index.module.css";
import { Text } from "@/shared/ui/Text/index.jsx";
import { Image } from "@/shared/ui/Image/index.jsx";
import { parseTime } from "@/shared/lib/helpers/parseTime.js";
import { getStorageFileURL } from "@/shared/lib/helpers/getStorageFileURL.js";

export function EventCard({ className, event, ...restProps }) {
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
      <div>
        <div className={styles.image__container}>
          <Image
            src={getStorageFileURL(event.photo.bucket, event.photo.key)}
            alt={event.title}
            skeletonHeight={300}
            skeletonWidth={400}
          />
        </div>
        <div className={styles.text_container}>
          <div>
            <Text className={styles.title}>{event.title}</Text>
          </div>
          <div className={styles.right__container}>
            <Text className={styles.row_element}>
              {event.location.location_name}
            </Text>
            <Text className={styles.time}>
              {event.location.city}, {event.location.country}
            </Text>
          </div>
          <div className={styles.left__container}>
            <Text className={styles.row_element}>
              {parseTime(event.start_at, dayOptions)}
            </Text>
            <Text className={cc(styles.time)}>
              {parseTime(event.start_at, timeOptions)}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
