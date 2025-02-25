import { Text } from "@/shared/ui/Text/index.jsx";
import styles from "./index.module.css";
import cc from "@/shared/lib/helpers/cc.js";
import { useNavigate } from "react-router";
import { navigationList } from "@/widgets/Header/const/navigationList.js";

export function Navigation({ className, ...restProps }) {
  const navigate = useNavigate();

  return (
    <div className={cc(className, styles.container)} {...restProps}>
      {navigationList.map((navigation) => (
        <Text
          className={cc(
            styles.navigation,
            navigation.isCurrent === true && styles["current"],
          )}
          key={navigation.id}
          onClick={() => navigate(navigation.route)}
        >
          {navigation.name}
        </Text>
      ))}
    </div>
  );
}
