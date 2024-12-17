/* eslint-disable react-refresh/only-export-components */

import { Outlet } from "react-router-dom";

import React, { useContext, useState } from "react";
import { useIsMobile } from "@/shared/hooks";

export interface MainLayoutContextProps {
  isMobile: boolean;
  sidebarState: "expanded" | "collapsed";
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
}

const MainLayoutContext = React.createContext<MainLayoutContextProps | null>(
  null
);

export const useMainLayout = (): MainLayoutContextProps => {
  const context = useContext(MainLayoutContext);
  if (!context)
    throw new Error("useMainLayout must be used within a MainLayoutProvider");
  return context;
};

export const MainLayoutProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ children, ...props }, ref) => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const contextValue: MainLayoutContextProps = {
    isMobile,
    sidebarState: sidebarOpen ? "expanded" : "collapsed",
    sidebarOpen,
    setSidebarOpen,
    toggleSidebar,
  };

  return (
    <MainLayoutContext.Provider value={contextValue}>
      <div
        ref={ref}
        className="relative flex min-h-dvh overflow-hidden"
        {...props}
      >
        {children}
      </div>
    </MainLayoutContext.Provider>
  );
});

export const MainLayout: React.FC = () => {
  return (
    <MainLayoutProvider>
      <header></header>

      <main className="h-full">
        <Outlet />
      </main>
    </MainLayoutProvider>
  );
};
