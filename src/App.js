import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Service from "./Components/Service/Service";


function App() {
  return (
    <div>
      <Navbar/>
   <Routes>
    <Route path="/login" element={<Login/>} />
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/service" element={<Service/>} />
    <Route path="/contact" element={<Contact/>} />
   
   </Routes>
   <Footer/>
    </div>
  );
}

export default App;
