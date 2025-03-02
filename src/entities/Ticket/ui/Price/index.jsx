import styles from "./index.module.css";
import { Text } from "@/shared/ui/Text/index.jsx";
import { countDiscountPrice } from "@/entities/Ticket/lib/helpers/countDiscountPrice.js";

export function Price({ className, price, discountPercentage, ...restProps }) {
  return (
    <div className={styles.container} {...restProps}>
      <Text className={styles.price}>
        {discountPercentage
          ? countDiscountPrice(price, discountPercentage)
          : price}
        €
      </Text>
      {discountPercentage && (
        <Text className={styles.full_price}>{price}€</Text>
      )}
    </div>
  );
}
