import { Text } from "@/shared/ui/Text/index.jsx";
import styles from "./index.module.css";
import cc from "@/shared/lib/helpers/cc.js";

export function Button({ className, children, ...restProps }) {
  return (
    <button className={cc(className, styles.button)} {...restProps}>
      <Text className={styles.text}>{children}</Text>
    </button>
  );
}
