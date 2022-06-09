import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/views/dashboard/Dashboard";
import Layout from "./components/views/layout/Layout";
import LoginView from "./components/views/login/LoginView";
import { MakeTransferenceToMyAccount } from "./components/views/transferences/makeTransference/makeTransfToMyAccount/MakeTransferenceToMyAccount";
import { AccountProvider } from "./context/accountContext/AccountContext";
import { AuthProvider } from "./context/AuthContext";
import IsLogged from "./routes/isLogged/IsLogged";
import PrivateRoute from "./routes/privateRoute/PrivateRoute";
import { MakeTransferenceToAnotherUser } from "./components/views/transferences/makeTransference/makeTransfToAnotherUser/MakeTransferenceToAnotherUser";

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
            path="/"
            element={
              <AccountProvider>
                <Dashboard />
              </AccountProvider>
            }
          />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="transference" element={<h1>transacciones</h1>} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route
            path="make_transference_to_my_account"
            element={<MakeTransferenceToMyAccount />}
          />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route
            path="make_transference_to_another_user/enter_number_account"
            element={<MakeTransferenceToAnotherUser />}
          />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route
            path="make_transference_to_another_user/make_transference"
            element={<h1>Transference to another user</h1>}
          />
        </Route>

        {/* <Route path="/" element={<h1>home</h1>} /> */}
        <Route path="*" element={<h1>Pagina no encontrada</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
