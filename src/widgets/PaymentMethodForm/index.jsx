import { Controller, useForm } from "react-hook-form";
import { paymentMethods } from "@/widgets/PaymentMethodForm/const/paymentMethods.js";
import { PaymentMethod } from "@/entities/Cart/ui/PaymentMethod/index.jsx";
import { Text } from "@/shared/ui/Text/index.jsx";
import cc from "@/shared/lib/helpers/cc.js";
import styles from "./index.module.css";

export function PaymentMethodForm({ className, ...restProps }) {
  const {
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      paymentMethod: "",
    },
  });

  return (
    <div className={cc(className)} {...restProps}>
      <Text className={styles.header}>PAYMENT METHOD</Text>
      <form>
        <Controller
          name="paymentMethod"
          control={control}
          rules={{ required: "Please select a payment method" }}
          render={({ field }) =>
            paymentMethods.map((method) => (
              <PaymentMethod
                key={method.id}
                id={method.id}
                checked={field.value === method.id}
                onClick={() => {
                  field.onChange(method.id);
                }}
                name={method.name}
                {...register(`${method.name}`)}
              />
            ))
          }
        />
      </form>
    </div>
  );
}
