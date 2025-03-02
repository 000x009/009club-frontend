import styles from "./index.module.css";
import cc from "@/shared/lib/helpers/cc.js";

export function RemoveLine({ className, ...restProps }) {
  return <div className={cc(className, styles.line)} {...restProps}></div>;
}
