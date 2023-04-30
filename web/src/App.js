import { Route, Routes } from "react-router-dom";
import AuthStore from "./contexts/AuthStore";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PrivateRoute from "./guards/PrivateRoute";
import EstablishmentsPage from "./pages/EstablishmentsPage";
import ProductsPage from "./pages/ProductsPage";
import ServicesPage from "./pages/ServicesPage";
import OrdersPage from "./pages/OrdersPage";
import Navbar from './components/navbar/Navbar';
import StaffPage from "./pages/StaffPage";
import Layout from "./components/layout/Layout";




function App() {
  return (
    <>
      <AuthStore>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <Routes>
            <Route path="/establishments" element={<EstablishmentsPage/>} />
            <Route path="/products/:establishmentId" element={<ProductsPage/> } />
            <Route path="/staff/:establishmentId" element={<StaffPage/> } />
            <Route path="/services/:establishmentId" element={<ServicesPage/> } />
            <Route path="/orders/:establishmentId" element={<OrdersPage/> } />
          </Routes>        
      </AuthStore>      
    </>
  );
}

export default App;
