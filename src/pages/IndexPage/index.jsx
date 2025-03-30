import { Header } from "@/widgets/Header/index.jsx";
import { Events } from "@/widgets/Events/index.jsx";
import styles from "./index.module.css";
import { Page } from "@/pages/Page/index.jsx";
import { Main } from "@/shared/ui/Main/index.jsx";

export default function IndexPage() {
  return (
    <Page className={styles.page}>
      <Header currentNavItemId={1} />
      <Main className={styles.main}>
        <Events />
      </Main>
    </Page>
  );
}
