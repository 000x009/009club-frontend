import cc from "@/shared/lib/helpers/cc.js";
import styles from "./index.module.css";

export function Text({ className, children, ...restProps }) {
  return (
    <span className={cc(className, styles.text)} {...restProps}>
      {children}
    </span>
  );
}
