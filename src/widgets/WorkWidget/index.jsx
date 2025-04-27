import { Text } from "@/shared/ui/Text/index.jsx";
import cc from "@/shared/lib/helpers/cc.js";
import styles from "./index.module.css";
import { Button } from "@/shared/ui/Button/index.jsx";

export function WorkWidget({ className, ...rest }) {
  return (
    <section className={cc(className, styles.wrapper)} {...rest}>
      <Text className={styles.title}>W0RK</Text>
      <div className={styles.buttons}>
        <Button type="primary">
          <Text>TAKE_A_CHANCE</Text>
        </Button>
      </div>
    </section>
  );
}
