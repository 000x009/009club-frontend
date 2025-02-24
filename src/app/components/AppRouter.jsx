import { Routes, BrowserRouter, Route, Navigate } from "react-router";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}
