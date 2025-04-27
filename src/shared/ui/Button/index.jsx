import cc from "@/shared/lib/helpers/cc.js";
import styles from "./index.module.css";

export function Button({
  className,
  component = "button",
  type = "primary",
  children,
  ...rest
}) {
  const Component = component;

  return (
    <Component className={cc(className, styles.button, styles[type])} {...rest}>
      {children}
    </Component>
  );
}
