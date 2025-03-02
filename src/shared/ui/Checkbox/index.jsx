import styles from "./index.module.css";
import cc from "@/shared/lib/helpers/cc.js";
import { SelectIcon } from "@/shared/ui/Checkbox/icons/SelectIcon.jsx";
import { SelectCheckedIcon } from "@/shared/ui/Checkbox/icons/SelectCheckedIcon.jsx";

export function Checkbox({ className, isShowSelectIcon, ...restProps }) {
  return (
    <label className={cc(styles.wrapper, className)}>
      <input type="checkbox" className={styles.input} {...restProps} />
      <SelectIcon
        className={cc(styles.select__icon, !isShowSelectIcon && styles.hidden)}
        aria-hidden={true}
      />
      <SelectCheckedIcon className={styles.checked__icon} aria-hidden={true} />
    </label>
  );
}
