import { PayPalButtons } from "@paypal/react-paypal-js";
import styles from "./index.module.css";
import cc from "@/shared/lib/helpers/cc.js";

export function PaypalPayment({
  className,
  handleCreateOrder,
  handleCaptureOrder,
  ...restProps
}) {
    const style = {
        shape: "rect",
        layout: "horizontal",
        color: "gold",
        disableMaxWidth: true,
        currency: "EUR",
    };

  return (
    <div className={cc(styles.paypal_payment, className)} {...restProps}>
      <PayPalButtons style={style} createOrder={handleCreateOrder} onApprove={handleCaptureOrder} />
    </div>
  );
}
