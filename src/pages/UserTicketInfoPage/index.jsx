import { Page } from "@/pages/Page";
import { Main } from "@/shared/ui/Main";
import styles from "./index.module.css";
import { TicketInfoWidget } from "@/widgets/TicketInfoWidget/index.jsx";
import TicketIcon from "@/shared/assets/ticket.svg?react";

export function UserTicketInfoPage() {
    return (
        <Page>
            <Main className={styles.main}>
                <TicketIcon />
                <TicketInfoWidget />
            </Main>
        </Page>
    )
}
