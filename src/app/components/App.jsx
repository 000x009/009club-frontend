import { AppRouter } from "@/app/components/AppRouter.jsx";
import { Footer } from "@/widgets/Footer/index.jsx";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
