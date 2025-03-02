import cc from "@/shared/lib/helpers/cc.js";
import styles from "./index.module.css";
import { Text } from "@/shared/ui/Text/index.jsx";

export function CartItem({
  className,
  name,
  quantity,
  totalPrice,
  ...restProps
}) {
  return (
    <div className={cc(className, styles.container)} {...restProps}>
      <div className={styles.left}>
        <Text>{name}</Text>
        <Text className={styles.quantity}>× {quantity}</Text>
      </div>
      <div className={styles.right}>
        <Text>{totalPrice}€</Text>
      </div>
    </div>
  );
}
