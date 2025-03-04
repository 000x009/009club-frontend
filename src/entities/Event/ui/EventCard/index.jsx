import cc from "@/shared/lib/helpers/cc.js";
import styles from "./index.module.css";
import { Text } from "@/shared/ui/Text/index.jsx";
import { Image } from "@/shared/ui/Image/index.jsx"

export function EventCard({
  className,
  name,
  startAt,
  endAt,
  ageGroup,
  address,
  locationName,
  photoUrl,
  ...restProps
}) {
  return (
    <div className={cc(className, styles.container)} {...restProps}>
      <div>
        <div>
          <Image src={photoUrl} alt={name} />
        </div>
        <div className={styles.text_container}>
          <div>
            <Text className={styles.title}>{name}</Text>
          </div>
          <div className={styles.row_container}>
            <Text className={styles.row_element}>{startAt}</Text>
            <Text className={styles.row_element}>{ageGroup}+</Text>
          </div>
          <div className={styles.row_container}>
            <Text className={styles.row_element}>{address}</Text>
            <Text className={styles.row_element}>{locationName}</Text>
          </div>
        </div>
      </div>
    </div>
  );
}
