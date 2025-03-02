import { LogoHeader } from "@/shared/ui/LogoHeader/index.jsx";
import { EventInformationBlock } from "@/widgets/EventInformationBlock/index.jsx";
import styles from "./index.module.css";

export function EventInformation() {
  return (
    <div>
      <LogoHeader />
      <main className={styles.main}>
        <EventInformationBlock />
      </main>
    </div>
  );
}
