import cc from "@/shared/lib/helpers/cc.js";
import styles from "./index.module.css";
import { Trans } from "react-i18next";

export function Text({ className, children, ...restProps }) {
  return (
    <span className={cc(className, styles.text)} {...restProps}>
      {typeof children === 'string' ? <Trans>{children}</Trans> : children}
    </span>
  );
}