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
    }, 2500);
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    const userStatus = localStorage.getItem("userLoggedIn") === "true";

    if (userStatus) {
      navigate("/admin/default");
    }
  }, [navigate]);

  const userLoggedIn = localStorage.getItem("userLoggedIn") === "true";

  return (
    <div>
      {loading ? (
        <div className="bg-[#010201]i flex  h-screen w-screen  items-center justify-center bg-white">
          <RiseLoader color="blue" size={30} loading={loading} />
        </div>
      ) : (
        <Routes>
          <Route path="auth/*" element={<AuthSignInLayout />} />
          {!userLoggedIn && (
            <Route
              path="admin/*"
              element={<Navigate to="/auth/sign-in" replace />}
            />
          )}
          {userLoggedIn && <Route path="admin/*" element={<AdminLayout />} />}
          <Route path="rtl/*" element={<RtlLayout />} />
          <Route path="/" element={<Navigate to="/auth/sign-in" replace />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
