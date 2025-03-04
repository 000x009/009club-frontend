import { LogoHeader } from "@/shared/ui/LogoHeader/index.jsx";
import { EventInformationBlock } from "@/widgets/EventInformationBlock/index.jsx";
import styles from "./index.module.css";
import { EventImage } from "@/entities/Event/ui/EventImage/index.jsx";
import { Button } from "@/shared/ui/Button/index.jsx";
import { useNavigate } from "react-router";
import { Text } from "@/shared/ui/Text/index.jsx";
import { Page } from "@/pages/Page/index.jsx";
import { Main } from "@/shared/ui/Main/index.jsx";

export function EventInformation() {
  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate("/event/tix");
  };

  return (
    <Page>
      <LogoHeader />
      <Main>
        <div className={styles.main__container}>
          <div className={styles["age-group-container"]}>
            <Text className={styles["age-group"]}>18+</Text>
          </div>
          <div className={styles.image_container}>
            <EventImage imageSrc={"/src/shared/assets/example.png"} />
          </div>
          <div className={styles.container}>
            <EventInformationBlock />
            <Button onClick={onButtonClick}>CHOOSE TICKETS</Button>
          </div>
        </div>
      </Main>
    </Page>
  );
}
