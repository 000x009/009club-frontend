import { useCreatePaypalOrder } from "@/entities/Payment/lib/hooks/useCreatePaypalOrder";
import { PaypalPayment } from "@/entities/Payment/ui/PaypalPayment/index.jsx";
import styles from "./index.module.css";
import { useCaptureOrder } from "@/entities/Payment/lib/hooks/useCaptureOrder";

export function Payment({ orderId }) {
  const { handleCreateOrder } = useCreatePaypalOrder();
  const { handleCaptureOrder } = useCaptureOrder();

  return (
    <div className={styles.container}>
      <PaypalPayment
        handleCreateOrder={() => handleCreateOrder(orderId)}
        handleCaptureOrder={() => handleCaptureOrder(orderId)}
      />
    </div>
  );
}
