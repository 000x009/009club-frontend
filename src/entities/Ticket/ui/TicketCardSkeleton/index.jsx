import cc from "@/shared/lib/helpers/cc.js";
import styles from "@/entities/Ticket/ui/TicketSelect/index.module.css";
import { Text } from "@/shared/ui/Text/index.jsx";
import { Price } from "@/entities/Ticket/ui/Price/index.jsx";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function TicketCardSkeleton({ className, ...restProps }) {
  return (
    <div className={cc(className, styles.container)} {...restProps}>
      <div className={styles.ticket__container}>
        <div className={styles.start__container}>
          <Text className={styles.name}>
            <Skeleton width={100} height={16} />
          </Text>
        </div>
        <div className={styles.right__container}>
          <Price />
          <Skeleton className={styles.add_icon} circle height={24} width={24} />
        </div>
      </div>
    </div>
  );
}
