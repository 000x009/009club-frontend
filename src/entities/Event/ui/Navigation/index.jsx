import { Text } from "@/shared/ui/Text/index.jsx";
import cc from "@/shared/lib/helpers/cc.js";
import styles from "./index.module.css";

export function Navigation({ className, children, ...restProps }) {
  return (
    <Text className={cc(className, styles.nav)} {...restProps}>
      {children}
    </Text>
  );
}
