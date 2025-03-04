import { LogoHeader } from "@/shared/ui/LogoHeader/index.jsx";
import styles from "./index.module.css";
import { EventImage } from "@/entities/Event/ui/EventImage/index.jsx";
import { Navigation } from "@/entities/Event/ui/Navigation/index.jsx";
import { Button } from "@/shared/ui/Button/index.jsx";
import { TicketsList } from "@/widgets/TicketList/index.jsx";
import { useNavigate } from "react-router";
import { Page } from "@/pages/Page/index.jsx";
import { Main } from "@/shared/ui/Main/index.jsx";

export function EventTickets() {
  const navigate = useNavigate();
  return (
    <Page>
      <LogoHeader />
      <Main>
        <div className={styles.main__container}>
          <div className={styles.image_container}>
            <EventImage imageSrc={"/src/shared/assets/example.png"} />
          </div>
          <div className={styles.container}>
            <div className={styles.text__container}>
              <Navigation>TICKETS</Navigation>
              <TicketsList />
            </div>
            <Button onClick={() => navigate("/event/checkout")}>
              CONTINUE
            </Button>
          </div>
        </div>
      </Main>
    </Page>
  );
}
