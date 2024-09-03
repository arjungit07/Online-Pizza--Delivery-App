import "./App.css";
// import { Container } from "react-bootstrap";
import Topbar from "./Components/Topbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Policy from "./Components/Policy";
import NavBar from "./Components/NavBar";
import Homescreen from "./screens/Homescreen";
import Cartscreen from "./screens/Cartscreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Orderscreen from "./screens/Orderscreen";
import Adminscreen from "./screens/Adminscreen";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <NavBar />
      <Routes>
        <Route path="/" element={<Homescreen />} exact />
        <Route path="/admin" element={<Adminscreen />} exact/>
        <Route path="/orders" element={<Orderscreen />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/register" element={<Register />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="/policy" element={<Policy />} exact />
        <Route path="/cart" element={<Cartscreen />} exact />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
