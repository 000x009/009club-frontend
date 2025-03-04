import cc from "@/shared/lib/helpers/cc.js";
import styles from "./index.module.css";

export function Page({ className, children, ...restProps }) {
  return (
    <div className={cc(className, styles.page)} {...restProps}>
      {children}
    </div>
  );
}
