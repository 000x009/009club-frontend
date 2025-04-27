import styles from "./index.module.css";
import LogoAnimation from "@/shared/assets/logo.gif";
import cc from "@/shared/lib/helpers/cc.js";
import { Navigation } from "./ui/Navigation";
import { Bullets } from "@/shared/ui/Bullets/index.jsx";
import { bulletsList } from "@/widgets/Header/const/bulletsList.js";
import { Sidebar } from "../Sidebar";
import MenuIcon from "@/shared/assets/menu.svg?react";
import { useState } from "react";

export function Header({ className, currentNavItemId, ...restProps }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const showSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className={cc(styles.header, className)} {...restProps}>
      <img src={LogoAnimation} className={styles.logo} />
      <MenuIcon className={styles.menu} onClick={showSidebar} />
      <Navigation current={currentNavItemId} />
      <Sidebar
        current={currentNavItemId}
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
      />
      <Bullets className={styles.bullets} bullets={bulletsList} />
    </header>
  );
}
