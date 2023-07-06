import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthSignInLayout from "layouts/auth-signIn";
const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthSignInLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/" element={<Navigate to="/auth" replace />} />
    </Routes>
  );
};

export default App;
