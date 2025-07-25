import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <Link to="/" className="text-gray-900">Home</Link>
            <Link to="/login" className="text-gray-500 hover:text-gray-700">Login</Link>
            <Link to="/register" className="text-gray-500 hover:text-gray-700">Register</Link>
          </div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <Outlet /> {/* This renders the matched route component */}
      </main>
    </div>
  );
};