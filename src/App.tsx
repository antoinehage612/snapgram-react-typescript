import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

import "./globals.css";
import { Home } from "./_root/pages";
import RootLayout from "./_root/RootLayout";
import AuthLayout from "./_auth/AuthLayout";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* pulic routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>
        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;
