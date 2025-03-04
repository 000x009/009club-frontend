import styles from "./index.module.css";
import Logo from "@/shared/assets/footer_logo_2.svg?react";
import { Text } from "@/shared/ui/Text/index.jsx";

export function LogoComponent() {
  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      <div className={styles.text_container}>
        <Text className={styles.company_name}>009cult</Text>
        <Text className={styles.company_mark}>
          © <b>3025</b>
        </Text>
      </div>
    </div>
  );
}
