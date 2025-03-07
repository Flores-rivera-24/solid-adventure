import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Perfil } from "./pages/Perfil";
import { Inicio } from "./pages/Inicio";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/Login" element={<Login />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> {/* Ruta raíz */}
        <Route path="Perfil" element={<Perfil />} />
        <Route path="Inicio" element={<Inicio />} />
        <Route path="Dashboard" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;