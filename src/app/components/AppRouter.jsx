import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import IndexPage from "@/pages/IndexPage/index.jsx";
import { EventInformation } from "@/pages/EventInformation/index.jsx";
import { EventTickets } from "@/pages/EventTickets/index.jsx";
import { CheckoutPage } from "@/pages/CheckoutPage/index.jsx";
import { SuccessPage } from "@/pages/SuccessPage/index.jsx";
import { UserTicketInfoPage } from "@/pages/UserTicketInfoPage/index.jsx";
import { TermsOfUse } from "@/pages/TermsOfUse/index.jsx";
import { PrivacyPolicy } from "@/pages/PrivacyPolicy/index.jsx";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<IndexPage />} />
        <Route path={"/event/:id"} element={<EventInformation />} />
        <Route path={"/event/:id/tickets"} element={<EventTickets />} />
        <Route
          path={"/event/:id/checkout/:orderId"}
          element={<CheckoutPage />}
        />
        <Route path={"/success"} element={<SuccessPage />} />
        <Route path={"/terms-of-use"} element={<TermsOfUse />} />
        <Route path={"/privacy-policy"} element={<PrivacyPolicy />} />
        <Route path={"/user-ticket/:id"} element={<UserTicketInfoPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
