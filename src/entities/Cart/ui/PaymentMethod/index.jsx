import { Checkbox } from "@/shared/ui/Checkbox/index.jsx";
import { Text } from "@/shared/ui/Text/index.jsx";
import cc from "@/shared/lib/helpers/cc.js";
import styles from "./index.module.css";

export function PaymentMethod({ id, className, name, ...restProps }) {
  return (
    <label className={cc(styles.method_option, className)}>
      <Checkbox id={id} isShowSelectIcon={true} {...restProps} />
      <Text htmlFor={id}>{name}</Text>
    </label>
  );
}
