import './Abi.css';
import { useState } from 'react';
import { useEffect } from 'react';

function My(){
const [a,setA]=useState();
const [B,setB]=useState();
const [C,setC]=useState();
const [D,setD]=useState();
const Abi=(e)=>{
    if(e.target.name=="name"){setA(e.target.value);}
    if(e.target.name=="pass"){setB(e.target.value);}
    if(e.target.name=="rpass"){setC(e.target.value);}
}
useEffect(()=>{
    if(B!=C){setD("miss match");}
    else{setD();}
},[C])
    return(
        <div>
            <div className="my1">
                <form>
                    <label>Enter your Name :</label>
                    <input type="text" name="name" onChange={Abi} value={a}></input><br/>
                    <label>Enter your Password :</label>
                    <input type="password" name="pass" onChange={Abi} value={B}></input><br/>
                    <label>Re-enter the Password :</label>
                    <input type="password" name="rpass" onChange={Abi} value={C}></input><br/>
                    <h5>{D}</h5>
                   <center><button>Register</button></center> 
                </form>
            </div>

        </div>
    );
}
export default My;