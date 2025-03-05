import styles from "./index.module.css"
import { Text } from "@/shared/ui/Text/index.jsx";

export function Row({label, value}) {
    return (
        <div className={styles.container}>
            <Text className={styles.label}>{label}</Text>
            <Text className={styles.value}>{value}</Text>
        </div>
    )
}