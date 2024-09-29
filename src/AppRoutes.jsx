import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Privacy } from "./pages/privacy/Privacy";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
        </Routes>
    )
}