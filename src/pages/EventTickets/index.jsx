import { LogoHeader } from "@/shared/ui/LogoHeader/index.jsx";
import styles from "./index.module.css";
import { EventImage } from "@/entities/Event/ui/EventImage/index.jsx";
import { Navigation } from "@/entities/Event/ui/Navigation/index.jsx";
import { Button } from "@/shared/ui/Button/index.jsx";
import { TicketsList } from "@/widgets/TicketList/index.jsx";
import { useParams } from "react-router";
import { Page } from "@/pages/Page/index.jsx";
import { Main } from "@/shared/ui/Main/index.jsx";
import { useTicketList } from "@/entities/Ticket/lib/hooks/useTicketList";
import { useCreateOrder } from "@/entities/Cart/lib/hooks/useCreateOrder";
import { getStorageFileURL } from "@/shared/lib/helpers/getStorageFileURL.js";
import { useEvent } from "@/entities/Event/lib/hooks/useEvent.js";
import { useState } from "react";
import { formatFormToCartItems } from "@/entities/Ticket/lib/helpers/formatFormToCartItems.js";
import { formatFormToUserTickets } from "@/entities/Ticket/lib/helpers/formatFormToUserTickets.js";
import { Input } from "@/shared/ui/Input/index.jsx";
import { useForm } from "react-hook-form";

export function EventTickets() {
  const { id } = useParams();
  const {
    data,
    isLoading: isLoadingTickets,
    isFetchingNextPage,
  } = useTicketList(id);
  const { data: eventData } = useEvent(id);
  const [tickets, setTickets] = useState([]);
  const { handleCreateOrder, isLoading } = useCreateOrder();
  const form = useForm({
    mode: "onChange",
  });

  const handleClick = () => {
    let formValues = form.getValues();
    let cartItems = formatFormToCartItems(tickets);
    let userTickets = formatFormToUserTickets(tickets);
    const email = formValues.email;

    if (!email) {
      form.setError("email", { message: "Email is required" });
      alert("Email is required");
      return;
    }

    if (cartItems.length === 0) {
      alert("Select a ticket");
    }

    const orderData = {
      event_id: id,
      order_items: cartItems,
      user_tickets: userTickets,
      email: email,
    };

    handleCreateOrder(orderData);
  };

  const onAddTicket = (ticket) => {
    setTickets((prev) => [
      ...prev,
      {
        ticketId: ticket.id,
        price: ticket.price_eur,
      },
    ]);
  };

  const onRemoveTicket = (ticketToRemove) => {
    setTickets((prevTickets) => {
      const ticketIndex = prevTickets.findIndex(
        (ticket) => ticket.ticketId === ticketToRemove.id,
      );

      if (ticketIndex === -1) {
        return prevTickets;
      }

      return [
        ...prevTickets.slice(0, ticketIndex),
        ...prevTickets.slice(ticketIndex + 1),
      ];
    });
  };

  return (
    <Page>
      <LogoHeader />
      <Main className={styles.main}>
        <div className={styles.image_container}>
          <EventImage
            imageSrc={
              eventData !== undefined &&
              getStorageFileURL(eventData.photo.bucket, eventData.photo.key)
            }
          />
        </div>
        <div className={styles.container}>
          <div className={styles.text__container}>
            <Navigation>tickets____</Navigation>
            <TicketsList
              onRemoveTicket={onRemoveTicket}
              onAddTicket={onAddTicket}
              tickets={data?.items ?? []}
              isLoading={isLoadingTickets}
              isFetching={isFetchingNextPage}
            />
          </div>
          <Input
            className={styles.input__container}
            placeholder={"Email"}
            {...form.register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
          />
          <Button onClick={handleClick} isLoading={isLoading}>
            checkout
          </Button>
        </div>
      </Main>
    </Page>
  );
}
