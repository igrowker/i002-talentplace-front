import { Route, Routes } from "react-router-dom"
import { LandingPage, PrivacyPolicy, AboutUs, Login, Register } from "../pages"

export const AppRouter = () => {
  return (
    <>
        <Routes>
             <Route path="/home" element={<LandingPage />} /> 
             <Route path="/*" element={<LandingPage />} /> 
             <Route path="/about" element={<AboutUs />} /> 
             <Route path="/privacy" element={<PrivacyPolicy />} /> 
             <Route path="/login" element={<Login />} /> 
             <Route path="/register" element={<Register />} /> 
        </Routes>
    </>
  )
}
