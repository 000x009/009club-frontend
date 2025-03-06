import cc from "@/shared/lib/helpers/cc.js";
import styles from "./index.module.css";
import { Text } from "@/shared/ui/Text/index.jsx";
import { Image } from "@/shared/ui/Image/index.jsx"
import { parseTime } from "../../../../shared/lib/helpers/parseTime";

export function EventCard({className, event, ...restProps}) {
  console.log(event);
  return (
    <div className={cc(className, styles.container)} {...restProps}>
      <div>
        <div>
          <Image src={"/src/shared/assets/example.png"} alt={event.title} />
        </div>
        <div className={styles.text_container}>
          <div>
            <Text className={styles.title}>{event.title}</Text>
          </div>
          <div className={styles.row_container}>
            <Text className={styles.row_element}>{parseTime(event.start_at)}</Text>
            <Text className={styles.row_element}>{event.age_group}+</Text>
          </div>
          <div className={styles.row_container}>
            <Text className={styles.row_element}>{event.location.address}</Text>
            <Text className={styles.row_element}>{event.location.location_name}</Text>
          </div>
        </div>
      </div>
    </div>
  );
}
