import { useState } from "react";
import { AuthForm } from "@/components/AuthForm";
import { CustomerDashboard } from "@/components/CustomerDashboard";
import { AdminDashboard } from "@/components/AdminDashboard";

const Index = () => {
  const [user, setUser] = useState<{type: 'customer' | 'admin'} | null>(null);

  const handleAuthSuccess = (userType: 'customer' | 'admin') => {
    setUser({ type: userType });
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <AuthForm onAuthSuccess={handleAuthSuccess} />;
  }

  if (user.type === 'customer') {
    return <CustomerDashboard onLogout={handleLogout} />;
  }

  return <AdminDashboard onLogout={handleLogout} />;
};

export default Index;
