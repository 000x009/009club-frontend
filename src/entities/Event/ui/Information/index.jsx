import { Text } from "@/shared/ui/Text/index.jsx";
import styles from "./index.module.css";
import cc from "@/shared/lib/helpers/cc.js";
import { getEventInformation } from "../../lib/helpers/getEventInformation";
import { Row } from "./ui/Row";
import "react-loading-skeleton/dist/skeleton.css";

export function Information({
  className,
  startAt,
  endAt,
  dressCode,
  ...restProps
}) {
  const eventInformation = getEventInformation(startAt, endAt, dressCode);

  return (
    <div className={cc(className, styles.container)} {...restProps}>
      <div>
        <Text className={styles.header}>INFORMATION</Text>
      </div>
      <div>
        {eventInformation.map((item) => (
          <Row key={item.id} label={item.label} value={item.value} />
        ))}
      </div>
    </div>
  );
}
