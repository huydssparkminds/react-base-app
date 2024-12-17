import { Route, Routes } from "react-router-dom";

import React, { lazy, Suspense } from "react";
import ProtectedRoute from "@/pages/guard/protected-route";
import { AuthLayout, MainLayout } from "@/pages/layout";
import LoadingPage from "@/pages/loading";

const DashboardPage = lazy(() => import("@/pages/dashboard"));
const AboutPage = lazy(() => import("@/pages/about"));

const MainRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        {/* <Route element={<AuthLayout />}>
          <Route
            path="/reset-password/:token"
            element={<ProtectedRoute meta={{ title: 'Menu.ResetPassword' }} element={ResetPasswordPage} />}
          />
        </Route> */}

        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <ProtectedRoute
                meta={{ title: "Menu.SecurityLogs" }}
                element={DashboardPage}
              />
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute
                meta={{ title: "Menu.SecurityLogs" }}
                element={AboutPage}
              />
            }
          />
        </Route>

        <Route path="*" element={<>Page Not Found</>} />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
