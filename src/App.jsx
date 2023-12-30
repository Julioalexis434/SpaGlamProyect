import React from "react";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Services from "./Components/Pages/Services/Services";
import About from "./Components/Pages/About/About";
import Contact from "./Components/Pages/Contact/Contact";
import ServicesDetail from "./Components/Pages/ServicesDetails/ServicesDetail";
import Products from "./Components/Pages/Products/Products";
import ProductDetail from "./Components/Pages/productsDetails/ProductDetail";
import { CartProvider } from "./Components/Context/CartContext";
import ScheduleService from "./Components/scheduleService/scheduleService";
import { ServiceProvider } from "./Components/Context/ServiceContext";
import ShoppingProduct from "./Components/Pages/shopping/ShoppingProduct";
import { ShoppingProvider } from "./Components/Context/ShoppingContext";
import Tips from "./Components/Pages/Tips/Tips";
import { ImagesProvider } from "./Components/Context/ImagesContext";

const App = () => {
  return (
    <div className=" font-serif">
      <CartProvider>
        <ServiceProvider>
          <ShoppingProvider>
            <ImagesProvider>
              <BrowserRouter>
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/servicios" element={<Services />} />
                  <Route path="/servicio/:id" element={<ServicesDetail />} />
                  <Route
                    path="/agendar/servicio"
                    element={<ScheduleService />}
                  />
                  <Route path="/productos" element={<Products />} />
                  <Route path="/producto/:id" element={<ProductDetail />} />
                  <Route path="/comprar" element={<ShoppingProduct />} />
                  <Route path="/sobre/nosotros" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/tips" element={<Tips />} />
                </Routes>
              </BrowserRouter>
            </ImagesProvider>
          </ShoppingProvider>
        </ServiceProvider>
      </CartProvider>
    </div>
  );
};

export default App;
