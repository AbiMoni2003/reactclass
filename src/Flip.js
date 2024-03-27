import {useState} from 'react';
import { useEffect } from 'react';
import './Abi.css';
function Flip(){
    const [a,seta]=useState();
    const [b,setb]=useState();
    const [c,setc]=useState();
    const [d,setd]=useState();

    const Abishek=(e)=>{
        if(e.target.name=="name"){seta(e.target.value)}
        if(e.target.name=="pass"){setb(e.target.value)}
        if(e.target.name=="rpass"){setc(e.target.value)}
    }
    useEffect(()=>{
        if(b!=c){setd("password is wrong")}
        else{setd()}
    },[c])


    const l=100;
    const m=200;
    const [e,sete]=useState(0);
    const [f,setf]=useState(0);
    const Abi=()=>{
        
        
        sete(e+1);
    }
    
    return(
        <div>
           <center> <div className="flip1">
                <form>
                    <label>Enter your Name </label><br/>
                    <input type="text" onChange={Abishek} name="name"></input><br/>
                    <label>Enter your Password </label><br/>
                    <input type="password" onChange={Abishek} name="pass"></input><br/>
                    <label>Re-Enter the password </label><br/>
                    <input type="password" onChange={Abishek} name="rpass"></input><br/>
                    <h5>{d}</h5>
                  <center>  <button>Register</button></center>
                </form>
            </div></center>
            <hr/>
            <div className='flip2'>
                <li><i class="fa-solid fa-cart-shopping"></i>{e}</li>
                <li><i class="fa-solid fa-indian-rupee-sign"></i></li><br/>
                <td><a onClick={Abi} name="cart" role="button">100</a></td>
                <td><button onClick={Abi} name="add">Add</button></td><br/>
                <td><a onClick={Abi} name="cart1" role="button">200</a></td>
                <td><button onClick={Abi} name="add">Add</button></td>
                <button onClick={Abi} name="re">Reset</button>
            </div>
            
        </div>
    );
}
export default Flip;