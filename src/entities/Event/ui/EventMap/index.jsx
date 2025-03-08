import { Map, Pin } from "@vis.gl/react-google-maps";
import { AdvancedMarker } from "@vis.gl/react-google-maps";
import cc from "@/shared/lib/helpers/cc.js";
import styles from "./index.module.css";
import { Text } from "@/shared/ui/Text/index.jsx";
import { appSettings } from "@/app/const/settings.js";

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
        mapId={appSettings.GOOGLE_EVENT_MAP_ID}
        className={styles.map}
        defaultCenter={{ lat: latitude, lng: longitude }}
        defaultZoom={12}
        gestureHandling={"greedy"}
        disableDefaultUI={false}
        colorScheme={"DARK"}
        reuseMaps={true}
      >
        <AdvancedMarker position={{ lat: latitude, lng: longitude }}>
          <Pin background={"#FE0000"} glyphColor={"#fff"} />
        </AdvancedMarker>
      </Map>
    </div>
  );
}
