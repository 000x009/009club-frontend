import { LogoHeader } from "@/shared/ui/LogoHeader/index.jsx";
import styles from "./index.module.css";
import { EventImage } from "@/entities/Event/ui/EventImage/index.jsx";
import { Navigation } from "@/entities/Event/ui/Navigation/index.jsx";
import { CartItemsList } from "@/widgets/CartItemsList/index.jsx";
import { Total } from "@/entities/Cart/ui/Total/index.jsx";
import { Divider } from "@/shared/ui/Divider/index.jsx";
import { Page } from "@/pages/Page/index.jsx";
import { Main } from "@/shared/ui/Main/index.jsx";
import { useParams } from "react-router";
import { useOrder } from "@/entities/Cart/lib/hooks/useOrder";
import { Payment } from "@/widgets/Payment/index.jsx";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function CheckoutPage() {
  const { orderId } = useParams();
  const { data, isLoading, isFetching } = useOrder(orderId);

  return (
    <Page>
      <LogoHeader />
      <Main>
        <div className={styles.main__container}>
          <div className={styles.image_container}>
            <EventImage imageSrc={"/src/shared/assets/example.png"} />
          </div>
          <div className={styles.container}>
            <div className={styles.text__container}>
              <Navigation>CHECKOUT</Navigation>
              <CartItemsList
                items={data?.order_items ?? []}
                isLoading={isLoading}
                isFetching={isFetching}
              />
              <div className={styles.total}>
                <Divider />
                <Total>
                  {data?.total_amount_usd || <Skeleton width={20} />}
                </Total>
              </div>
            </div>
            <Payment orderId={orderId} />
          </div>
        </div>
      </Main>
    </Page>
  );
}
