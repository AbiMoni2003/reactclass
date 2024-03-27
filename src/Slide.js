import {useState} from "react";
function Slide(){
  let a=5;
  a=6;
  const b=3;
  const [c,setc]=useState("ydfhg"); 
  const [d,abi]=useState(10);
  const Abishek=()=>{
    setc("mt text")
    abi(11)
   
  }
    return(
        
        <div>
<h1>The value{d} of a is {c} </h1>
<button onClick={Abishek}>click here</button>

        </div>
    );
}
export default Slide;