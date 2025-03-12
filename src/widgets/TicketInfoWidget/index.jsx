import styles from "./index.module.css";
import { useParams } from "react-router";
import { useUserTicket } from "../../entities/UserTicket/hooks/useUserTicket";
import { TicketInfo } from "../../entities/UserTicket/ui/TicketInfo";

export function TicketInfoWidget() {
  const { id } = useParams()
  const { data } = useUserTicket(id)

  return (
    <div className={styles.container}>
      <TicketInfo ticket={data} />
    </div>
  );
}
