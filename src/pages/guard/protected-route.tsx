import { Navigate, useLocation } from "react-router-dom";

import React from "react";
import LoadingPage from "@/pages/loading";
import { useAppDispatch, useAppSelector } from "@/shared/store";

interface ProtectedRouteProps {
  element: React.FC | React.ComponentClass;
  meta: { title: string; requiresAuth?: boolean };
}

const PrivateRoute: React.FC<ProtectedRouteProps> = ({
  element: Component,
  meta,
  ...props
}) => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const isAuthenticated = useAppSelector(
    (state) => state.authentication.isAuthenticated
  );

  if (isAuthenticated && meta.requiresAuth) {
    return <LoadingPage />;
  }

  if (isAuthenticated && !meta.requiresAuth) {
    return <Navigate to="/" replace />;
  }

  if (
    (isAuthenticated && meta.requiresAuth) ||
    (!isAuthenticated && !meta.requiresAuth)
  ) {
    return <Component {...props} />;
  }

  return (
    <Navigate
      to={{
        pathname: "/login",
        search: `?redirect=${location.pathname}${location.search}`,
      }}
      replace
      state={{ from: location }}
    />
  );
};

export default PrivateRoute;
