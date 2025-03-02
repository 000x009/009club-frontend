import cc from "@/shared/lib/helpers/cc.js";
import styles from "./index.module.css";

export function Divider({ className, ...restProps }) {
  return <div className={cc(className, styles.divider)} {...restProps}></div>;
}
