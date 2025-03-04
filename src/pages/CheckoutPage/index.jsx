import { LogoHeader } from "@/shared/ui/LogoHeader/index.jsx";
import styles from "./index.module.css";
import { EventImage } from "@/entities/Event/ui/EventImage/index.jsx";
import { Navigation } from "@/entities/Event/ui/Navigation/index.jsx";
import { Button } from "@/shared/ui/Button/index.jsx";
import { CartItemsList } from "@/widgets/CartItemsList/index.jsx";
import { Input } from "@/shared/ui/Input/index.jsx";
import { PaymentMethodForm } from "@/widgets/PaymentMethodForm/index.jsx";
import { Total } from "@/entities/Cart/ui/Total/index.jsx";
import { Divider } from "@/shared/ui/Divider/index.jsx";
import { Page } from "@/pages/Page/index.jsx";
import { Main } from "@/shared/ui/Main/index.jsx";

export function CheckoutPage() {
  const items = [
    { id: 1, name: "General ticket", quantity: 4, totalPrice: 120 },
    { id: 2, name: "VIP ticket", quantity: 2, totalPrice: 40 },
  ];

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
              <CartItemsList items={items} />
              <PaymentMethodForm />
              <div className={styles.total}>
                <Divider />
                <Total>160</Total>
              </div>
              <div className={styles.input__container}>
                <Input placeholder={"Email"} />
              </div>
            </div>
            <Button>PAY</Button>
          </div>
        </div>
      </Main>
    </Page>
  );
}
