import { Text } from "@/shared/ui/Text/index.jsx";
import styles from "./index.module.css";

export function EventTitle({ className, title, description, ...restProps }) {
  return (
    <div className={styles.container} {...restProps}>
      <Text className={styles.title}>{title}</Text>
      <Text className={styles.description}>{description}</Text>
    </div>
  );
}
