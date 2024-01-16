// local imports
import Home from "./views/Home"
import Food from "./views/Food"
import{BrowserRouter,Route,Routes} from "react-router-dom";
import Signin from "./views/Signin";
import DonorSi from "./views/DonorSi";
import Login from "./views/Login";
import Myprofile from "./views/Myprofile";
import About from "./views/About";

function App() {
  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/Food" element ={<Food/>}/>
        <Route path="/Signin" element ={<Signin/>}/>
        <Route path="/DonorSi" element ={<DonorSi/>}/>
        <Route path="/Login" element ={<Login/>}/>
        <Route path="/Myprofile" element ={<Myprofile/>}/>
        <Route path="/About" element ={<About/>}/>
       </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
