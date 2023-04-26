import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AuthStore from "./contexts/AuthStore";
import EstablishmentsPage from "./pages/EstablishmentsPage";
import PrivateRoute from "./guards/PrivateRoute";


function App() {
  return (
    <>
      <AuthStore>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage /> } />
          <Route path="/establishments" element={<PrivateRoute><EstablishmentsPage /></PrivateRoute> } />
        </Routes>
      </AuthStore>      
    </>
  );
}

export default App;
