import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  // like someone can enter in private rutes using a set of radom letters
  // i added some extra security
  return token && token.length >= 50 ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
