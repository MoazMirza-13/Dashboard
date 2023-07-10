import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import RiseLoader from "react-spinners/RiseLoader";

import AdminLayout from "layouts/admin";
import AuthSignInLayout from "layouts/auth-signIn";

const App = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const userStatus = localStorage.getItem("userLoggedIn") === "true";

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    if (userStatus && location.pathname.startsWith("/admin")) {
    } else if (userStatus) {
      navigate("/admin/default");
    }
  }, [location, userStatus, navigate]);

  return (
    <div>
      {loading ? (
        <div className="flex h-screen w-screen items-center justify-center bg-white">
          <RiseLoader color="blue" size={30} loading={loading} />
        </div>
      ) : (
        <Routes>
          <Route path="auth/*" element={<AuthSignInLayout />} />
          {!userStatus && (
            <Route
              path="admin/*"
              element={<Navigate to="/auth/sign-in" replace />}
            />
          )}
          {userStatus && <Route path="admin/*" element={<AdminLayout />} />}
          <Route path="/" element={<Navigate to="/auth/sign-in" replace />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
