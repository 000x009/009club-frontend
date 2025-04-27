import cc from "../../shared/lib/helpers/cc";
import styles from "./index.module.css";
import { navigationList } from "@/widgets/Header/const/navigationList.js";
import { Text } from "@/shared/ui/Text/index.jsx";
import CloseIcon from "@/shared/assets/close.svg?react";

export function Sidebar({ className, current, isOpen, onClose, ...rest }) {
  return (
    <div
      className={cc(
        className,
        styles.wrapper,
        isOpen === false ? styles.hidden : null,
      )}
      hidden={!isOpen}
      {...rest}
    >
      <div className={styles.sidebar}>
        <CloseIcon className={styles.close} onClick={onClose} />
        <ol className={styles.navBar}>
          {navigationList.map((navigation) => (
            <li
              className={cc(
                styles.navigation,
                navigation.id === current && styles["current"],
              )}
              key={navigation.id}
              onClick={() => navigate(navigation.route)}
            >
              <a href={navigation.route}>
                <Text>{navigation.name}</Text>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
