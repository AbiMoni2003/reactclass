import {BrowserRouter as Router,Route,Link,Routes} from "react-router-dom"; 
import Home from "./Home";
import About from "./About";
import Display from "./Display";
import { useState } from "react";
import Values from './Values';
function Pattarivilai(){
    const [a,seta]=useState(2); 
   let x=10;
   let product=[{"Name":"Phone","Price":100000,"Brand":"Honor"},{"Name":"Fan","Price":1000,"Brand":"Orient"},{"Name":"Laptop","Price":100000,"Brand":"Dell"}]
   const A=product.map((y)=><tr><td key={y.toString()}>{y.Name}</td><td key={y.toString()}>{y.Price}</td><td key={y.toString()}>{y.Brand}</td></tr>);
  
    return(
        <Router>
           Menu Bar
           <h1>Comman to All Pages</h1> 
           <Link to={"/"} >Home</Link>
           <Link to={"/Abishek"}>About</Link>
           <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Abishek" element={<About/>}></Route>
           </Routes>
           <Values data={product} ke={A} />
           
        </Router>
       
    );
}
export default Pattarivilai;