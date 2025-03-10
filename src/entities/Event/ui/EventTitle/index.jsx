import { Text } from "@/shared/ui/Text/index.jsx";
import styles from "./index.module.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function EventTitle({ className, title, description, ...restProps }) {
  return (
    <div className={styles.container} {...restProps}>
      <Text className={styles.title}>{title || <Skeleton />}</Text>
      <Text className={styles.description}>
        {description || <Skeleton count={2} />}
      </Text>
    </div>
  );
}
