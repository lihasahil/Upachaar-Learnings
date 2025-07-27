import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/theme-context/ThemeContext";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/fall-back";
import { LoginForm } from "./auth/Login";
import { RegisterForm } from "./auth/Register";
// import { ResetPasswordForm } from "./auth/ResetPasswordForm";
import { Layout } from "./components/Layout"; // Optional layout wrapper
import AdminDashboard from "./components/admin-dashboard";

function App() {
  return (
    <ThemeProvider>
      
      <Routes>
        {/* Optional layout wrapper for consistent styling */}
        <Route path="/" element={<Layout />}>
          {/* Public routes */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          {/* <Route path="/reset-password" element={<ResetPasswordForm />} /> */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          {/* Protected routes would go here */}
          {/* <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} /> */}
        </Route>

        {/* 404 catch-all route */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
