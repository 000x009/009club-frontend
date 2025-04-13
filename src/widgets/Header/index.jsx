import styles from "./index.module.css";
import Logo from "@/shared/assets/logo.svg?react";
import cc from "@/shared/lib/helpers/cc.js";
import { Navigation } from "./ui/Navigation";
import {Bullets} from "@/shared/ui/Bullets/index.jsx";
import {bulletsList} from "@/widgets/Header/const/bulletsList.js";

export function Header({ className, currentNavItemId, ...restProps }) {
  const instagramUrl = "https://www.instagram.com/009club.ww/";

  return (
    <header className={cc(styles.header, className)} {...restProps}>
      <Logo className={styles.logo} onClick={() => window.open(instagramUrl)} />
      <Navigation current={currentNavItemId} />
        <Bullets className={styles.bullets} bullets={bulletsList}/>
    </header>
  );
}
