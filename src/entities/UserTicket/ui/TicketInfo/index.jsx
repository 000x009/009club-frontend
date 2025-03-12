import styles from "./index.module.css";
import { getTicketInformation } from "../../helpers/getTicketInformation";
import { Row } from "./Row";

export function TicketInfo({ className, ticket, ...restProps }) {
  const ticketInformation = getTicketInformation(ticket);

  return (
    <div className={styles.container} {...restProps}>
      {ticketInformation.map((row) => (
        <Row key={row.id} label={row.label} value={row.value} />
      ))}
    </div>
  );
}
