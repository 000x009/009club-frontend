import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import IndexPage from "@/pages/IndexPage/index.jsx";
import { EventInformation } from "@/pages/EventInformation/index.jsx";
import { EventTickets } from "@/pages/EventTickets/index.jsx";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<IndexPage />} />
        <Route path={"/event/:id"} element={<EventInformation />} />
        <Route path={"/event/tix"} element={<EventTickets />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
