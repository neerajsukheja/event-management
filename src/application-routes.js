// routes.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Events from "./pages/Events";
import EventForm from "./pages/EventForm";
import NotFound from "./pages/NotFound";
import EventDetailView from "./pages/EventDetailView";

const ProtectedRoute = ({ element }) => {
  const { id } = useSelector((state) => state?.user || {});
  const isAuthenticated = id ? true : false;
  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

const ApplicationRoutes = ({ isAuthenticated }) => (
  <Router>
    <Routes>
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/events" /> : <Login />}
      />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/" element={<Navigate to="/events" replace />} />
      <Route path="/events" element={<ProtectedRoute element={<Events />} />} />
      <Route
        path="/event/create"
        element={<ProtectedRoute element={<EventForm />} />}
      />
      <Route
        path="/event/edit/:id"
        element={<ProtectedRoute element={<EventForm />} />}
      />
      <Route
        path="/event/view/:id"
        element={<ProtectedRoute element={<EventDetailView />} />}
      />
      <Route path="*" element={<ProtectedRoute element={<NotFound />} />} />
    </Routes>
  </Router>
);

export default ApplicationRoutes;
