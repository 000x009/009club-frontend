import { Text } from "@/shared/ui/Text/index.jsx";
import { EventInformationBlock } from "@/widgets/EventInformationBlock/index.jsx";
import { useNavigate } from "react-router";
import styles from "./index.module.css";
import { EventImage } from "@/entities/Event/ui/EventImage/index.jsx";
import { Button } from "@/shared/ui/Button/index.jsx";

export function EventInformationWidget({ data }) {
  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate("/event/tix");
  };
  console.log(data)

    return (
        <div className={styles.main__container}>
          <div className={styles["age-group-container"]}>
            <Text className={styles["age-group"]}>{data.age_group}+</Text>
          </div>
          <div className={styles.image_container}>
            <EventImage imageSrc={"/src/shared/assets/example.png"} />
          </div>
          <div className={styles.container}>
            <EventInformationBlock event={data}/>
            <Button onClick={onButtonClick}>CHOOSE TICKETS</Button>
          </div>
        </div>
    )
}