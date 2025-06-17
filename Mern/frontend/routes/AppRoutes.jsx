import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Index from "../pages/Index";
const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/api/products/" element={< Index/>} />
      {/* Other routes */}
    </Routes>
  );
};

export default AppRoute;
