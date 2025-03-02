import { forwardRef } from "react";
import styles from "./index.module.css";
import cc from "@/shared/lib/helpers/cc.js";

export const Input = forwardRef(function Input(
  { placeholder, type = "text", value, onChange, className, ...restProps },
  ref,
) {
  return (
    <input
      ref={ref}
      autoComplete="off"
      className={cc(styles.input, className)}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      type={type}
      {...restProps}
    />
  );
});
