import cc from "@/shared/lib/helpers/cc.js";
import styles from "./index.module.css";
import { Text } from "@/shared/ui/Text/index.jsx";
import { getTotalItemPrice } from "@/entities/Cart/lib/helpers/getTotalItemPrice";

export function CartItem({
  className,
  item,
  ...restProps
}) {
  return (
    <div className={cc(className, styles.container)} {...restProps}>
      <div className={styles.left}>
        <Text>{item.ticket_tier.name}</Text>
        <Text className={styles.quantity}>× {item.quantity}</Text>
      </div>
      <div className={styles.right}>
        <Text>{getTotalItemPrice(item.price, item.quantity)}€</Text>
      </div>
    </div>
  );
}
