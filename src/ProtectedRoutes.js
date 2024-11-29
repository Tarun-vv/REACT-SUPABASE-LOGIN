import { Navigate, useNavigate } from "react-router-dom";
import { useUser } from "./services/login/useUser";
import { useEffect } from "react";

function ProtectedRoutes({ children }) {
  const navigate = useNavigate();

  // // 1. load authenticated user
  const { user, isLoading, isAuthenticated } = useUser();

  // 3. if no authenticated user redirect to login page ** IMPORTANT **
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isLoading, navigate, isAuthenticated]
  );

  // 2. while loading, make spinner
  if (isLoading) return <h2>Loading...</h2>;

  // 4. if there is a user, render app
  return <div>{children}</div>;

  // const { isAuthenticated } = useUser();

  // return user?.role !== "authenticated" ? (
  //   <div>{children}</div>
  // ) : (
  //   <Navigate to="/login" />
  // );
}

export default ProtectedRoutes;
