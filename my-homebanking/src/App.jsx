import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/views/layout/Layout";
import LoginView from "./components/views/login/LoginView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        {/* Ruta publica */}
        <Route path="login" element={<LoginView />}/>

        {/* Se deben proteger mas adelante */}
        <Route path="dashboard" element={<h1>DashBoard</h1>}/>
        {/* Este ruta es provisoria, mas adelante vere si realmente necesito que este aca */}
        <Route path="transferencias" element={<h1>transferencias</h1>}/>
        {/* error 404 (si no encuentra la pagina) */}
        <Route path="*" element={<h1>Pagina no encontrada</h1>}/>

      </Route>
    </Routes>

  );
}

export default App;
