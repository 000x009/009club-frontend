import { Header } from "@/widgets/Header/index.jsx";
import { Notification } from "@/widgets/Notification/index.jsx";
import { EventsList } from "@/widgets/EventsList/index.jsx";
import { Footer } from "@/widgets/Footer/index.jsx";

export default function IndexPage() {
  const message = "31.05";

  return (
    <>
      <Notification message={message} />
      <Header currentNavItemId={1} />
      <EventsList />
      <Footer />
    </>
  );
}
