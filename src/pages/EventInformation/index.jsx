import { Header } from "@/pages/EventInformation/ui/Header/index.jsx";
import { EventInformationBlock } from "@/widgets/EventInformationBlock/index.jsx";
import styles from "./index.module.css";

export function EventInformation() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <EventInformationBlock />
      </main>
    </div>
  );
}
