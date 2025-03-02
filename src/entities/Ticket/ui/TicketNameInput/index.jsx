import { Input } from "@/shared/ui/Input/index.jsx";
import { RemoveLine } from "@/entities/Ticket/ui/RemoveLine/index.jsx";
import styles from "./index.module.css";
import { Text } from "@/shared/ui/Text/index.jsx";

export function TicketNameInput({
  className,
  errorMessage,
  onRemove,
  ...restProps
}) {
  return (
    <div className={styles.container}>
      <div className={styles.input_container}>
        <Input {...restProps} placeholder={"Full Name"} />
        <div className={styles.remove__container} onClick={onRemove}>
          <RemoveLine />
        </div>
      </div>
      {errorMessage && <Text className={styles.error}>{errorMessage}</Text>}
    </div>
  );
}
