import { Map, Marker } from "@vis.gl/react-google-maps";
import cc from "@/shared/lib/helpers/cc.js";
import styles from "./index.module.css";
import { Text } from "@/shared/ui/Text/index.jsx";

export function EventMap({
  className,
  longitude,
  latitude,
  address,
  ...restProps
}) {
  return (
    <div className={cc(className, styles.container)} {...restProps}>
      <Text className={styles.address}>{address}</Text>
      <Map
        className={styles.map}
        defaultCenter={{ lat: latitude, lng: longitude }}
        defaultZoom={12}
        gestureHandling={"greedy"}
        disableDefaultUI={false}
        colorScheme={"DARK"}
        reuseMaps={true}
      >
        <Marker position={{ lat: latitude, lng: longitude }} />
      </Map>
    </div>
  );
}
