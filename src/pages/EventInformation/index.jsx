import { LogoHeader } from "@/shared/ui/LogoHeader/index.jsx";
import { useParams } from "react-router";
import { Page } from "@/pages/Page/index.jsx";
import { Main } from "@/shared/ui/Main/index.jsx";
import { useEvent } from "@/entities/Event/lib/hooks/useEvent.js";
import { EventInformationWidget } from "../../widgets/EventInformationWidget";

export function EventInformation() {
  const params = useParams();
  const { data } = useEvent(params.id);

  return (
    <Page>
      <LogoHeader />
      <Main>
        <EventInformationWidget data={data} />
      </Main>
    </Page>
  );
}
