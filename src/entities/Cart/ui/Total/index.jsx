import { Text } from "@/shared/ui/Text/index.jsx";
import cc from "@/shared/lib/helpers/cc.js";
import styles from "./index.module.css";

export function Total({ children, className, ...restProps }) {
  return (
    <div className={cc(className, styles.container)} {...restProps}>
      <Text className={styles.total}>Total:</Text>
      <Text className={styles.price}>{children}€</Text>
    </div>
  );
}
