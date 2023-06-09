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
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ServiceServicesPage from "./pages/ServiceServicesPage";
import ServiceDetailTakerPage from "./pages/ServiceDetailTakerPage";
import OrdersPageKitchen from "./pages/OrdersPageKitchen";





function App() {
  return (
    <>
      <AuthStore>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />        
          <Route path="/establishments" element={<EstablishmentsPage/>} />
          <Route path="/products/:establishmentId" element={<ProductsPage/> } />
          <Route path="/staff/:establishmentId" element={<StaffPage/> } />
          <Route path="/service/:serviceId" element={<ServiceDetailPage/> } />
          <Route path="/services/:establishmentId" element={<ServicesPage/> } />
          <Route path="/services/:id/service" element={<ServiceServicesPage/> } />
          <Route path="/service/:serviceId/take" element={<ServiceDetailTakerPage/> } />
          <Route path="/orders/:establishmentId" element={<OrdersPage/> } />
          <Route path="/orders/:establishmentId/kitchen" element={<OrdersPageKitchen/> } />
        </Routes>        
      </AuthStore>      
    </>
  );
}

export default App;
