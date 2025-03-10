import cc from "@/shared/lib/helpers/cc.js";
import styles from "./index.module.css";
import { Text } from "@/shared/ui/Text/index.jsx";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function CartItemSkeleton({ className, ...restProps }) {
  return (
    <div className={cc(className, styles.container)} {...restProps}>
      <div className={styles.left}>
        <Text>
          <Skeleton width={50} />
        </Text>
        <Text className={styles.quantity}>
          <Skeleton width={50} />
        </Text>
      </div>
      <div className={styles.right}>
        <Text className={styles.skeleton}>
          <Skeleton width={50} />
        </Text>
      </div>
    </div>
  );
}
