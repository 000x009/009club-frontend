import styles from "./index.module.css";
import Logo from "@/shared/assets/logo.svg?react";
import cc from "@/shared/lib/helpers/cc.js";

export function Header({ className, ...restProps }) {
  return (
    <header className={cc(styles.header, className)} {...restProps}>
      <div className={styles.container}>
        <Logo />
      </div>
    </header>
  );
}
