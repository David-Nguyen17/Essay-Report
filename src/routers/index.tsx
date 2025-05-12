import AppGuard from "@/helpers/AppGuard";
import LoginPage from "@/pages/login";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { RouteName } from "./RouteName";

const HomePage = lazy(() => import("@/pages/home"));
const NotFoundPage = lazy(() => import("@/pages/not-found"));
const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteName.LOGIN} element={<LoginPage />} />
        <Route path="/" element={<AppGuard />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
