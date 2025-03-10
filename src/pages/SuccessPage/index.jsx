import { Page } from "@/pages/Page";
import TicketIcon from "@/shared/assets/ticket.svg?react";
import { Text } from "@/shared/ui/Text";
import { Main } from "@/shared/ui/Main";
import styles from "./index.module.css";
import { LogoHeader } from "@/shared/ui/LogoHeader/index.jsx";

export function SuccessPage() {
    return (
        <Page>
            <LogoHeader />
            <Main className={styles.main}>
                <TicketIcon />
                <div className={styles.content}>
                    <Text className={styles.title}>
                        Success!
                    </Text>
                    <Text className={styles.description}>
                        We've sent you an email with your tickets.
                    </Text>
                </div>
            </Main>
        </Page>
    )
}
