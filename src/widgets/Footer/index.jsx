import styles from "./index.module.css";
import cc from "@/shared/lib/helpers/cc.js";
import Logo from "@/shared/assets/footer_logo.svg?react";

export function Footer({ className, ...restProps }) {
  return (
    <footer className={cc(styles.footer, className)} {...restProps}>
      <div className={styles.container}>
        <Logo />
      </div>
    </footer>
  );
}
