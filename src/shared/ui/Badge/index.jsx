import cc from "@/shared/lib/helpers/cc.js";
import { Text } from "@/shared/ui/Text/index.jsx";
import styles from "./index.module.css";

export function Badge({ className, children, ...restProps }) {
  return (
    <label className={cc(className, styles.container)} {...restProps}>
      <Text className={styles.text}>{children}</Text>
    </label>
  );
}
