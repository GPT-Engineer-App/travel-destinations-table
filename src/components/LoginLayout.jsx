import React from "react";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/40">
      <Outlet />
    </div>
  );
};

export default LoginLayout;