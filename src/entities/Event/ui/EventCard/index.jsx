import cc from "@/shared/lib/helpers/cc.js";
import styles from "./index.module.css";
import { Image } from "@/shared/ui/Image/index.jsx";
import { Text } from "@/shared/ui/Text/index.jsx";

export function EventCard({ className, event, ...restProps }) {
  return (
    <div className={cc(className, styles.container)} {...restProps}>
      <Image className={styles.image} src={event.poster} alt="poster" />
      <Text className={styles.button}>TICKETS</Text>
    </div>
  );
}
