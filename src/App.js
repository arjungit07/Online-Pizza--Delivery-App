import "./App.css";
import { Container } from "react-bootstrap";
import Topbar from "./Components/Topbar"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Policy from "./Components/Policy";
import NavBar from "./Components/NavBar";
import Homescreen from './screens/Homescreen'
// import Cartscreen from './screens/Cartscreen'

function App() {
  return (
    <BrowserRouter>
      <Topbar/>
      <NavBar/>
      <Routes>
        <Route path="/about" element={<About/>} exact/>
        <Route path="/contact" element={<Contact/>} exact/>
        <Route path="/policy" element={<Policy/>} exact/>
        <Route path="/" element={<Homescreen/>} exact/>
        {/* <Route path="/cart" element={<Cartscreen/>} exact/> */}
      </Routes>
    </BrowserRouter >
  );
}

export default App;
