import { Text } from "@/shared/ui/Text/index.jsx";
import styles from "./index.module.css";
import cc from "@/shared/lib/helpers/cc.js";
import { Loader } from "@/shared/ui/Loader/index.jsx";

export function Button({ className, children, isLoading, ...restProps }) {
  return (
    <button className={cc(className, styles.button)} {...restProps}>
      {isLoading ? <Loader /> : <Text className={styles.text}>{children}</Text>}
    </button>
  );
}
