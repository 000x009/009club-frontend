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
import { useForm, FormProvider } from "react-hook-form";
import { isFormValid } from "@/entities/Ticket/lib/helpers/isFormValid";
import { formatFormToCartItems } from "@/entities/Ticket/lib/helpers/formatFormToCartItems";
import { formatFormToUserTickets } from "@/entities/Ticket/lib/helpers/formatFormToUserTickets";
import { useCreateOrder } from "@/entities/Cart/lib/hooks/useCreateOrder";
import { Input } from "@/shared/ui/Input/index.jsx";
import { getStorageFileURL } from "@/shared/lib/helpers/getStorageFileURL.js";
import { useEvent } from "@/entities/Event/lib/hooks/useEvent.js";

export function EventTickets() {
  const { id } = useParams();
  const {
    data,
    isLoading: isLoadingTickets,
    isFetchingNextPage,
  } = useTicketList(id);
  const { data: eventData } = useEvent(id);
  const { handleCreateOrder, isLoading } = useCreateOrder();
  const form = useForm({
    mode: "onChange",
  });

  const handleClick = () => {
    const formValues = form.getValues();
    const tickets = formValues.tickets;
    const email = formValues.email;

    if (!email) {
      form.setError("email", { message: "Email is required" });
      alert("Email is required");
      return;
    }

    const isValid = isFormValid(tickets);
    if (!isValid) return;

    const cartItems = formatFormToCartItems(tickets);
    const userTickets = formatFormToUserTickets(tickets);

    const orderData = {
      event_id: id,
      order_items: cartItems,
      user_tickets: userTickets,
      email: email,
    };

    handleCreateOrder(orderData);
  };

  return (
    <Page>
      <LogoHeader />
      <Main>
        <div className={styles.main__container}>
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
              <Navigation>TICKETS</Navigation>
              <FormProvider {...form}>
                <TicketsList
                  tickets={data?.items ?? []}
                  isLoading={isLoadingTickets}
                  isFetching={isFetchingNextPage}
                />
                <Input
                  className={styles.input__container}
                  placeholder={"Email"}
                  {...form.register("email", {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  })}
                />
              </FormProvider>
            </div>
            <Button onClick={handleClick} isLoading={isLoading}>
              CONTINUE
            </Button>
          </div>
        </div>
      </Main>
    </Page>
  );
}
