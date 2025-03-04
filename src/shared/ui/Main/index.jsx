import cc from "@/shared/lib/helpers/cc.js";
import styles from "./index.module.css";

export function Main({ className, children, ...restProps }) {
  return (
    <main className={cc(className, styles.main)} {...restProps}>
      {children}
    </main>
  );
}
