import styles from "./index.module.css";
import { Text } from "@/shared/ui/Text/index.jsx";

export function AdvantagesList({ className, advantages, ...restProps }) {
  return (
    <div className={styles.container} {...restProps}>
      {advantages.map((advantage, index) => (
        <Text key={index} className={styles.item}>
          {advantage}
        </Text>
      ))}
    </div>
  );
}
