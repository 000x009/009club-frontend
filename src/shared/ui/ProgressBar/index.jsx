import styles from "./index.module.css";
import cc from "@/shared/lib/helpers/cc.js";

export function ProgressBar({ className, percentage, ...restProps }) {
  return (
    <div className={cc(className, styles.bar)} {...restProps}>
      <div
        className={styles.progress}
        style={{
          width: `${percentage}%`,
        }}
      ></div>
    </div>
  );
}
