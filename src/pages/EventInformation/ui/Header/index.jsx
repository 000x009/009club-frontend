import styles from "./index.module.css";
import Logo from "@/shared/assets/logo.svg?react";
import cc from "@/shared/lib/helpers/cc.js";

export function Header({ className, ...restProps }) {
  const instagramUrl = "https://www.instagram.com/009cult/";

  return (
    <header className={cc(styles.header, className)} {...restProps}>
      <Logo className={styles.logo} onClick={() => window.open(instagramUrl)} />
    </header>
  );
}
