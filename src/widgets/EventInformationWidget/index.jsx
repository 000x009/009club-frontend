import { Text } from "@/shared/ui/Text/index.jsx";
import { EventInformationBlock } from "@/widgets/EventInformationBlock/index.jsx";
import { useNavigate } from "react-router";
import styles from "./index.module.css";
import { EventImage } from "@/entities/Event/ui/EventImage/index.jsx";
import { Button } from "@/shared/ui/Button/index.jsx";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getStorageFileURL } from "@/shared/lib/helpers/getStorageFileURL.js";

export function EventInformationWidget({ data }) {
  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate(`/event/${data.id}/tickets`);
  };

  return (
    <div className={styles.main__container}>
      <div className={styles["age-group-container"]}>
        <Text className={styles["age-group"]}>
          <Skeleton />
        </Text>
      </div>
      <div className={styles.image_container}>
        <EventImage
          imageSrc={
            data !== undefined &&
            getStorageFileURL(data.photo.bucket, data.photo.key)
          }
        />
      </div>
      <div className={styles.container}>
        <EventInformationBlock event={data} />
        <Button onClick={onButtonClick}>CHOOSE TICKETS</Button>
      </div>
    </div>
  );
}
