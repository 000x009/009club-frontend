import cc from "@/shared/lib/helpers/cc.js";
import styles from "./index.module.css";
import { Text } from "@/shared/ui/Text/index.jsx";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function EventCardSkeleton({ className, ...restProps }) {
  return (
    <div className={cc(className, styles.container)} {...restProps}>
      <div className={styles.image__container}>
        <Skeleton height={250} />
      </div>
      <div className={styles.text_container}>
        <div>
          <Text className={styles.title}>
            <Skeleton containerClassName={styles.title} />
          </Text>
        </div>
        <div className={styles.row_container}>
          <Text className={styles.row_element}>
            <Skeleton containerClassName={styles.row_element} />
          </Text>
          <Text className={styles.row_element}>
            <Skeleton containerClassName={styles.row_element} />
          </Text>
        </div>
        <div className={styles.row_container}>
          <Text className={styles.row_element}>
            <Skeleton containerClassName={styles.row_element} />
          </Text>
          <Text className={styles.row_element}>
            <Skeleton containerClassName={styles.row_element} />
          </Text>
        </div>
      </div>
    </div>
  );
}
