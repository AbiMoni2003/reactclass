import {useState} from 'react';
import { useEffect } from 'react';
import './Abi.css';
function Intrest(){
    const [p,setp]=useState();
    const [r,setr]=useState();
    const [t,sett]=useState();
    const [c,setc]=useState();
    const d=c-p;
    const [e,sete]=useState();
    const [A,setA]=useState();
    const [B,setB]=useState();
    const [C,setC]=useState();
    const [X,setX]=useState();
    const [Y,setY]=useState();
    const [X1,setX1]=useState();
    const [Y1,sety1]=useState();
    const [y,sety]=useState();
    const form=(e)=>{
        if(e.target.name=="usename"){setX(e.target.value);
        sety(e.target.value.length);}
        if(e.target.name=="pass"){setY(e.target.value);}
      
    
    }
useEffect(()=>{setX(X);
console.log(X)},[X])
useEffect(()=>{if(y<5){setX1("short")}
else{setX1()}},[X])
   const color1=(e)=>{
    if(e.target.name=="red"){sete("red");}
    if(e.target.name=="green"){setA("green");}
    if(e.target.name=="blue"){setB("blue");}
    if(e.target.name=="yellow"){setC("yellow");}
   }
    const Abi=(e)=>{
        if(e.target.name=="amount")
        {setp(parseInt(e.target.value));}

        if(e.target.name=="percent"){setr(parseInt(e.target.value));}
        if(e.target.name=="time"){sett(parseInt(e.target.value));}
        
    }
    useEffect(()=>{setc(Math.round((p*Math.pow((1+r/100),t))))},[t])
   

    return(
        <div>
          <center>  <div className="in1">
                <h1 >Intrest Calculation </h1>
                <form>
                    <label>Enter the total amount :</label>
                    <input type="number" name="amount" value={p} onChange={Abi}></input><br/>
                    <label>Enter the percentage :</label>
                    <input type="number" name="percent" value={r} onChange={Abi}></input><br/>
                    <label>Enter the time(year) :</label>
                    <input type="number" name="time" value={t} onChange={Abi}></input><br/>
                   <center> <button name="button" >Calculate</button></center><br/>
                   <label> compound interest = Rs{d}</label>
               
                </form>
            </div></center>
            <div>
                <button className="in2" style={{backgroundColor:e}} onClick={color1} name="red">signin</button><br/><br/>
                <button className="in3" style={{backgroundColor:A}} onClick={color1} name="green">login</button><br/><br/>
                <button className="in4" style={{backgroundColor:B}} onClick={color1} name="blue">register</button><br/><br/>
                <button className="in5" style={{backgroundColor:C}} onClick={color1} name="yellow">click</button>
            </div>
            <div>
                <form>
                  <td>  <label>user name</label></td>
                   <td> <input type="text" name="usename" onChange={form} value={X}></input></td>
                   <td><input type="text" value={X}></input></td><br/>
                   <h5>{X1}</h5><br/>
                   <label>password</label>
                   <input type="password" name="pass" value={Y} onChange={form}></input><br/>
                   <h5>{Y}</h5>
                </form>
            </div>

        </div>
    );
}
export default Intrest;