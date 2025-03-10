import cc from "@/shared/lib/helpers/cc.js";
import { CartItem } from "@/entities/Cart/ui/CartItem/index.jsx";
import styles from "./index.module.css";
import { CartItemsSkeleton } from "@/widgets/CartItemsSkeleton/index.jsx";

export function CartItemsList({
  items,
  className,
  isLoading,
  isFetching,
  ...restProps
}) {
  return (
    <div className={cc(className, styles.container)} {...restProps}>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      {isFetching || isLoading ? <CartItemsSkeleton /> : null}
    </div>
  );
}
