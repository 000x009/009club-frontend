import styles from "./index.module.css";
import cc from "@/shared/lib/helpers/cc.js";
import { Text } from "@/shared/ui/Text/index.jsx";
import AddIcon from "@/shared/assets/add.svg?react";
import { Badge } from "@/shared/ui/Badge/index.jsx";
import { Price } from "@/entities/Ticket/ui/Price/index.jsx";
import { AdvantagesList } from "@/entities/Ticket/ui/AdvantagesList/index.jsx";
import { TicketsForm } from "@/entities/Ticket/ui/TicketsForm/index.jsx";
import { useFieldArray, useForm } from "react-hook-form";

export function TicketSelect({
  className,
  name,
  price,
  showBestOfferBadge,
  discountPercentage,
  advantages,
  ...restProps
}) {
  const form = useForm({
    mode: "onChange",
  });
  const formController = useFieldArray({
    control: form.control,
    name: "tickets",
  });

  const appendTicket = () => {
    formController.append({ id: "", name: "" });
  };

  return (
    <div className={cc(className, styles.container)} {...restProps}>
      <div className={styles.ticket__container}>
        <div className={styles.start__container}>
          <Text className={styles.name}>{name}</Text>
          {showBestOfferBadge && <Badge>BEST OFFER</Badge>}
        </div>
        <div className={styles.right__container}>
          <Price price={price} discountPercentage={discountPercentage} />
          <AddIcon className={styles.add_icon} onClick={appendTicket} />
        </div>
      </div>
      {advantages && <AdvantagesList advantages={advantages} />}
      {formController.fields.length > 0 && (
        <TicketsForm form={form} formController={formController} />
      )}
    </div>
  );
}
