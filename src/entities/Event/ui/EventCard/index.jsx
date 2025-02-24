import cc from "@/shared/lib/helpers/cc.js";
import styles from "./index.module.css";

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
        <img src={photoUrl} alt={name} />
      </div>
    </div>
  );
}
