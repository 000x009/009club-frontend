import { Text } from "@/shared/ui/Text/index.jsx";
import styles from "./index.module.css";
import cc from "@/shared/lib/helpers/cc.js";
import { useNavigate } from "react-router";
import { navigationList } from "@/widgets/Header/const/navigationList.js";

export function Navigation({ className, current, ref, ...restProps }) {
  const navigate = useNavigate();

  return (
    <div ref={ref} className={cc(className, styles.container)} {...restProps}>
      {navigationList.map((navigation) => (
        <Text
          className={cc(
            styles.navigation,
            navigation.id === current && styles["current"],
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
