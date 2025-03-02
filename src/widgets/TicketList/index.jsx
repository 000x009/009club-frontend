import { TicketSelect } from "@/entities/Ticket/ui/TicketSelect/index.jsx";
import styles from "./index.module.css";

export function TicketsList() {
  return (
    <div className={styles.container}>
      <TicketSelect
        name="General"
        price={9.99}
        advantages={["common admission"]}
      />
      <TicketSelect
        name="VIP"
        price={14.99}
        discountPercentage={20}
        showBestOfferBadge={true}
        advantages={["fast admission", "hot tub", "vip zone"]}
      />
    </div>
  );
}
