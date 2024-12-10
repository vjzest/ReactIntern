import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Verticalheader from "./components/Verticalheader"; // Sidebar
import Dashboard from "./pages/Dashboard"; // Dashboard component
import NewTicket from "./pages/NewTicket"; // New Ticket component
import MyTicket from "./pages/MyTicket"; // My Ticket component
import Footer from "./components/Footer"; // Footer component
import Contact from "./pages/Contact"; // Contact Page
import Header from "./components/Header"; // Header Component
import SignIn from "./pages/SignIn"; // Sign In Page
import SignUp from "./pages/SignUp";
import ForgetPassword from "./pages/ForgetPassword";
import { TicketProvider } from "./pages/TicketContext";
import EditProfile from "./pages/EditProfile";
import TicketApproval from "./pages/TicketApproval";
import Performance from "./pages/Performance";
import AdminDashboard from "./pages/AdminDashboard";
import TechnicalDashboard from "./pages/TechnicalDashboard";
import Setting from "./pages/Setting";
import UserLogHistory from "./pages/UserLogHistory";

const App = () => {
  return (
    <Router>
      {/* Header */}
      <Header />

      <div className="flex h-screen">
        {/* Sidebar */}
        <Verticalheader />

        {/* Main content */}
        <div className="flex-1 bg-white p-6 overflow-y-auto">
          <Routes>
            {/* Default route to Dashboard */}
            <Route path="/" element={<Dashboard />} />

            {/* Routes for other pages */}
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgetPassword />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route
              path="/techincaldashboard"
              element={<TechnicalDashboard />}
            />
            <Route path="/new-ticket" element={<NewTicket />} />
            <Route path="/ticket-approval" element={<TicketApproval />} />
            <Route path="/my-ticket" element={<MyTicket />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/userlog-history" element={<UserLogHistory />} />
          </Routes>
        </div>
      </div>

      {/* Footer (Optional) */}
      <Footer />
    </Router>
  );
};

export default App;
