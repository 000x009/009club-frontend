import { LogoHeader } from "@/shared/ui/LogoHeader/index.jsx";
import { useNavigate, useParams } from "react-router";
import { Page } from "@/pages/Page/index.jsx";
import { Main } from "@/shared/ui/Main/index.jsx";
import { useEvent } from "../../entities/Event/lib/hooks/useEvent";
import { EventInformationWidget } from "../../widgets/EventInformationWidget";

export function EventInformation() {
  const params = useParams()
  const {data, isLoading} = useEvent(params.id)

  return (
    <Page>
      <LogoHeader />
      <Main>
        {isLoading ? null : <EventInformationWidget data={data}/>}
      </Main>
    </Page>
  );
}
