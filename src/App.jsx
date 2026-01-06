import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./pages/register";
import SubmitData from "./pages/Submitdata";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" />} />
      <Route path="/register" element={<Register />} />
      <Route path="/submit-data" element={<SubmitData />} />
    </Routes>
  );
}
