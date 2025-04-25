import styles from "./index.module.css";
import LogoAnimation from "@/shared/assets/logo.gif";
import cc from "@/shared/lib/helpers/cc.js";
import { Navigation } from "./ui/Navigation";
import { Bullets } from "@/shared/ui/Bullets/index.jsx";
import { bulletsList } from "@/widgets/Header/const/bulletsList.js";

export function Header({ className, currentNavItemId, ...restProps }) {
  return (
    <header className={cc(styles.header, className)} {...restProps}>
      <img src={LogoAnimation} className={styles.logo} />
      <Navigation current={currentNavItemId} />
      <Bullets className={styles.bullets} bullets={bulletsList} />
    </header>
  );
}
