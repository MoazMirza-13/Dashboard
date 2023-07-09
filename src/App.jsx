import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import RiseLoader from "react-spinners/RiseLoader";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthSignInLayout from "layouts/auth-signIn";

const App = () => {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);

  const userStatus = localStorage.getItem("userLoggedIn") === "true";
  const navigate = useNavigate();

  useEffect(() => {
    if (userStatus) {
      navigate("/admin/default");
    } else {
      navigate("/auth/sign-in");
    }
  }, [userStatus, navigate]);

  return (
    <div>
      {loading ? (
        <div className="bg-[#010201]i flex  h-screen w-screen  items-center justify-center bg-white">
          <RiseLoader color="blue" size={30} loading={loading} />
        </div>
      ) : (
        <Routes>
          <Route path="auth/*" element={<AuthSignInLayout />} />
          <Route path="admin/*" element={<AdminLayout />} />
          <Route path="rtl/*" element={<RtlLayout />} />
          <Route path="/" element={<Navigate to="/auth/sign-in" replace />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
