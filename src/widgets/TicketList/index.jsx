import { TicketSelect } from "@/entities/Ticket/ui/TicketSelect/index.jsx";
import styles from "./index.module.css";

export function TicketsList({tickets}) {
  return (
    <div className={styles.container}>
      {tickets.map((ticket) => (
        <TicketSelect key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}
