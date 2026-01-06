import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./pages/register";

export default function App() {
  return (
    <Routes>
      {/* root path uses Register */}
      <Route path="/" element={<Register />} />

      {/* explicit path to Register */}
      <Route path="/register" element={<Register />} />

      {/* optional fallback */}
      <Route path="*" element={<Navigate to="/register" replace />} />
    </Routes>
  );
}
