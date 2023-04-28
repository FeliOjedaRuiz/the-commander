import { Route, Routes } from "react-router-dom";
import AuthStore from "./contexts/AuthStore";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PrivateRoute from "./guards/PrivateRoute";
import EstablishmentsPage from "./pages/EstablishmentsPage";
import ProductsPage from "./pages/ProductsPage";



function App() {
  return (
    <>
      <AuthStore>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/establishments" element={<EstablishmentsPage/> } />
          <Route path="/products/:establishmentId" element={<ProductsPage/> } />
        </Routes>
      </AuthStore>      
    </>
  );
}

export default App;
