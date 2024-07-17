import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserEdit from "./pages/UserEdit";
import Login from "./components/Login"; // Importe o componente Login

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/useredit/:id?" element={<UserEdit />} />
        <Route path="/login" element={<Login />} /> {/* Adicione rota para Login */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
