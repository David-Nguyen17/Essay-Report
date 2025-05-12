import { type RootState, useAppSelector } from "@/redux/store";
import { Navigate, Outlet } from "react-router";

const AppGuard = () => {
  const { access_token } = useAppSelector((state: RootState) => state["feature/auth"]);
  if (access_token) {
    return <Outlet />;
  }
  return <Navigate to="/login" />;
};

export default AppGuard;
