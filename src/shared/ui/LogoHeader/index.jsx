import styles from "./index.module.css";
import LogoAnimation from "@/shared/assets/animations/009logo.json";
import cc from "@/shared/lib/helpers/cc.js";
import Lottie from "lottie-react";

export function LogoHeader({ className, ...restProps }) {
  return (
    <header className={cc(styles.header, className)} {...restProps}>
      <Lottie
        className={styles.logo}
        animationData={LogoAnimation}
        style={{ height: 150, width: 150 }}
        loop={true}
      />
    </header>
  );
}
