import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import AcercaDe from "./pages/AcercaDe";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/acercade" element={<AcercaDe />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}