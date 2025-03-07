import styles from "./index.module.css";
import { Text } from "@/shared/ui/Text/index.jsx";

export function AdvantagesList({ className, advantages, ...restProps }) {
  return (
    <div className={styles.container} {...restProps}>
      {advantages.map((advantage) => (
        <Text key={advantage.id} className={styles.item}>
          {advantage.name}
        </Text>
      ))}
    </div>
  );
}
