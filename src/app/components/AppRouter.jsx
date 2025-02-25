import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import IndexPage from "@/pages/IndexPage/index.jsx";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<IndexPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
