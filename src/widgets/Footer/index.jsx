import styles from "./index.module.css"
import StarsIcon from "/src/shared/assets/stars.svg?react"

export function Footer() {
    return (
        <footer className={styles.footer}>
            <StarsIcon/>
            <StarsIcon/>
        </footer>
    )
}