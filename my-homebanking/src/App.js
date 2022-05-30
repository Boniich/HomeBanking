import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/views/dashboard/Dashboard";
import Layout from "./components/views/layout/Layout";
import LoginView from "./components/views/login/LoginView";
import { AccountProvider } from "./context/accountContext/AccountContext";
import { AuthProvider } from "./context/AuthContext";
import IsLogged from "./routes/isLogged/IsLogged";
import PrivateRoute from "./routes/privateRoute/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Ruta publica */}

        <Route element={<IsLogged />}>
          <Route
            path="login"
            element={
              <AuthProvider>
                <LoginView />
              </AuthProvider>
            }
          />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route
            path="dashboard"
            element={
              <AccountProvider>
                <Dashboard />
              </AccountProvider>
            }
          />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="transacciones" element={<h1>transacciones</h1>} />
        </Route>
        {/* error 404 (si no encuentra la pagina) */}
        <Route path="*" element={<h1>Pagina no encontrada</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
