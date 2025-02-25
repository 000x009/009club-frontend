import styles from "./index.module.css";
import cc from "@/shared/lib/helpers/cc.js";
import { LogoComponent } from "@/widgets/Footer/ui/LogoComponent/index.jsx";
import { Bullets } from "@/shared/ui/Bullets/index.jsx";
import { bulletsList } from "@/widgets/Footer/const/bulletsList.js";

export function Footer({ className, ...restProps }) {
  return (
    <footer className={cc(styles.footer, className)} {...restProps}>
      <div className={styles.container}>
        <LogoComponent />
        <Bullets bullets={bulletsList} />
      </div>
    </footer>
  );
}
