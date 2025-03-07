import styles from "./index.module.css";
import { TicketNameInput } from "@/entities/Ticket/ui/TicketNameInput/index.jsx";
import { useFormContext } from "react-hook-form";

export function TicketsForm({ className, formController, ...restProps }) {
  const form = useFormContext();
  const inputRegisterOptions = {
    required: "Full name is required",
    maxLength: 50,
  };

  const errorMessages = {
    maxLength: "Full name must be less than 50 characters",
  };

  const getErrorMessage = (index) => {
    let errors = form.formState.errors?.tickets;
    return errors !== undefined && errors[index] !== undefined
      ? errors[index].name?.message || errorMessages[errors[index].name?.type]
      : null;
  };

  return (
    <form className={styles.form} {...restProps}>
      {formController.fields.map((ticket, index) => (
        <div className={styles.input_container} key={ticket.id}>
          <TicketNameInput
            errorMessage={getErrorMessage(index)}
            onRemove={() => {
              formController.remove(index);
            }}
            {...form.register(`tickets.${index}.name`, inputRegisterOptions)}
          />
        </div>
      ))}
    </form>
  );
}
