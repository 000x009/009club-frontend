import { Text } from "@/shared/ui/Text/index.jsx";
import cc from "@/shared/lib/helpers/cc.js";
import styles from "./index.module.css";

export function Bullets({ className, bullets, ...restProps }) {
  return (
    <div className={cc(className, styles.container)} {...restProps}>
      {bullets.map((bullet) => (
        <Text key={bullet.id} className={styles.bullet}>
          <a href={bullet.redirectUrl} target={"_blank"}>
            {bullet.name}
          </a>
        </Text>
      ))}
    </div>
  );
}
