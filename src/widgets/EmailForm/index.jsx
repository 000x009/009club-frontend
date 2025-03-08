import styles from "./index.module.css";
import { Input } from "@/shared/ui/Input/index.jsx";
import cc from "@/shared/lib/helpers/cc.js";
import { useFormContext } from "react-hook-form";

export function EmailForm({className, ...props}) {
    const formOptions = {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    }
  const { register } = useFormContext();

  return (
    <div className={cc(styles.container, className)} {...props}>
        <Input placeholder={"Email"} {...register("email", formOptions)}/>
    </div>
  );
}
