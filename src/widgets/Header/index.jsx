import styles from "./index.module.css";
import Logo from "@/shared/assets/logo.svg?react";
import cc from "@/shared/lib/helpers/cc.js";
import { Bullets } from "@/shared/ui/Bullets/index.jsx";
import { bulletsList } from "@/widgets/Header/const/bulletsList.js";
import { Navigation } from "@/widgets/Header/ui/Navigation/index.jsx";

export function Header({ className, ...restProps }) {
  const instagramUrl = "https://www.instagram.com/009cult/";

  return (
    <header className={cc(styles.header, className)} {...restProps}>
      <Logo className={styles.logo} onClick={() => window.open(instagramUrl)} />
      <div className={styles.container}>
        <Navigation />
        <Bullets bullets={bulletsList} />
      </div>
    </header>
  );
}
