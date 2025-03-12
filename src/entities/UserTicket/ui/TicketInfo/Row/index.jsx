import styles from "./index.module.css";
import { Text } from "@/shared/ui/Text/index.jsx";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function Row({ label, value }) {
  return (
    <div className={styles.container}>
      <Text className={styles.label}>{label}</Text>
      <Text className={styles.value}>{value || <Skeleton />}</Text>
    </div>
  );
}
