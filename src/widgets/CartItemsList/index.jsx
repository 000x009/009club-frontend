import cc from "@/shared/lib/helpers/cc.js";
import { CartItem } from "@/entities/Cart/ui/CartItem/index.jsx";
import styles from "./index.module.css";

export function CartItemsList({ items, className, ...restProps }) {
  return (
    <div className={cc(className, styles.container)} {...restProps}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          totalPrice={item.totalPrice}
        />
      ))}
    </div>
  );
}
