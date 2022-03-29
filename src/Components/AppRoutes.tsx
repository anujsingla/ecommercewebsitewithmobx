import { Routes, Route, Navigate } from "react-router-dom";
import { AllProducts } from "./AllProducts";
import { Login } from "./Login";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/products" />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};