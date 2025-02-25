import { Header } from "@/widgets/Header/index.jsx";
import { Footer } from "@/widgets/Footer/index.jsx";
import { Events } from "@/widgets/Events/index.jsx";
import styles from "./index.module.css";

export default function IndexPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Events />
      </main>
      <Footer />
    </div>
  );
}
