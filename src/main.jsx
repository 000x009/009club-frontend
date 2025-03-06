import { createRoot } from "react-dom/client";
import Root from "./app/components/Root.jsx";
import "@/app/styles/global.css";
import "./shared/i18n/index.js";

createRoot(document.getElementById("root")).render(<Root />);
