import styles from "./index.module.css";
import cc from "@/shared/lib/helpers/cc.js";
import { Text } from "@/shared/ui/Text/index.jsx";
import AddIcon from "@/shared/assets/add.svg?react";
import RemoveIcon from "@/shared/assets/remove.svg?react";
import { Badge } from "@/shared/ui/Badge/index.jsx";
import { Price } from "@/entities/Ticket/ui/Price/index.jsx";
import { useState } from "react";
import { ProgressBar } from "@/shared/ui/ProgressBar/index.jsx";
import { getTicketsSoldPercentage } from "@/entities/Ticket/lib/helpers/getTicketsSoldPercentage.js";

export function TicketSelect({
  className,
  onAddTicket,
  onRemoveTicket,
  ticket,
  ...restProps
}) {
  const [ticketAmount, setTicketAmount] = useState(0);
  const ticketsSoldPercentage = getTicketsSoldPercentage(
    ticket.available_amount,
    ticket.initial_amount,
  );

  const appendTicket = () => {
    onAddTicket(ticket);
    setTicketAmount((prev) => prev + 1);
  };

  const removeTicket = () => {
    onRemoveTicket(ticket);
    setTicketAmount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div
      className={cc(
        className,
        styles.container,
        ticket.status === "AVAILABLE" && styles["available"],
      )}
      {...restProps}
    >
      <div className={styles.ticket__container}>
        <div className={styles.start__container}>
          <Text className={styles.name}>{ticket.name}</Text>
          {ticket.showBestOfferBadge && <Badge>BEST OFFER</Badge>}
        </div>
        <div className={styles.right__container}>
          <Price
            price={ticket.price_eur}
            discountPercentage={ticket.discountPercentage}
          />
          {ticket.status === "AVAILABLE" && (
            <div className={styles.amount__container}>
              <RemoveIcon className={styles.add_icon} onClick={removeTicket} />
              <Text className={styles.ticketAmount}>{ticketAmount}</Text>
              <AddIcon className={styles.add_icon} onClick={appendTicket} />
            </div>
          )}
        </div>
      </div>
      {ticket.status === "AVAILABLE" && (
        <div className={styles.progress}>
          <ProgressBar percentage={ticketsSoldPercentage} />
          <Text className={styles.percentage}>{ticketsSoldPercentage}%</Text>
        </div>
      )}
      {ticket.status === "UNAVAILABLE" && (
        <Text className={styles.not_available}>*not available yet</Text>
      )}
      {ticket.status === "SOLD_OUT" && (
        <Text className={styles.not_available}>*sold_out</Text>
      )}
    </div>
  );
}
