import { Text } from "@/shared/ui/Text/index.jsx";
import styles from "./index.module.css";
import cc from "@/shared/lib/helpers/cc.js";

export function Information({
  className,
  day,
  date,
  hours,
  dressCode,
  ...restProps
}) {
  return (
    <div className={cc(className, styles.container)} {...restProps}>
      <div>
        <Text className={styles.header}>INFORMATION</Text>
      </div>
      <div>
        <div className={styles.row}>
          <Text className={styles.label}>DAY</Text>
          <Text className={styles.value}>{day}</Text>
        </div>
        <div className={styles.row}>
          <Text className={styles.label}>DATE</Text>
          <Text className={styles.value}>{date}</Text>
        </div>
        <div className={styles.row}>
          <Text className={styles.label}>HOURS</Text>
          <Text className={styles.value}>{hours}</Text>
        </div>
        <div className={styles.row}>
          <Text className={styles.label}>DRESS CODE</Text>
          <Text className={styles.value}>{dressCode}</Text>
        </div>
      </div>
    </div>
  );
}
