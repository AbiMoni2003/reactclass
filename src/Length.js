import './Length.css';
import {useState} from 'react';
import {useEffect} from 'react';
function Length(){
    const [a,seta]=useState();
    const [b,setb]=useState();
    const [c,setc]=useState();
    const [A,setA]=useState();
    const [B1,setB1]=useState();
    const [B2,setB2]=useState();
    const [C,setC]=useState();
    const [x,setx]=useState();
    const [y,sety]=useState();
    const [X,setX]=useState("red");
    const [Y,setY]=useState("green");
    const [cl,setcl]=useState();
    const [cll,setcll]=useState([]);

    const val=(e)=>{
        if(e.target.name=="text"){setcl(e.target.value);}
       
       

    }
    const click=(e)=>{
       cll.push(cl);
       console.log(cll);
    }
    

    const len=(e)=>{
        if(e.target.name=="name"){seta(e.target.value);
        setx(e.target.value.length);}
        if(e.target.name=="pass"){setb(e.target.value);
        sety(e.target.value.length);}
        if(e.target.name=="rpass"){setc(e.target.value);}
        
    }
    

    useEffect(()=>{if(x<5){setA("Your User name is Short")}
else{setA()}},[a])
useEffect(()=>{if(y<8){setB1("Your PassWord is Weak")}
else{setB1()}},[b])
useEffect(()=>{if(y>=8){setB2("Your Password is strong")}
else{setB2()}},[b])
useEffect(()=>{if(b!=c){setC("Miss Match The Password")}
else{setC()}},[c])
console.log(A);

    
    return(
        <div>
           <center> <div className="len1">
                <form>
                    <label>Enter the User Name :</label>
                    <input type="text" name="name" value={a} onChange={len}></input><br/>
                    <h5>{A}</h5>
                    <label>Enter your Password :</label>
                    <input type="password" name="pass" value={b} onChange={len}></input><br/>
                    <h5><span style={{color:X}}>{B1}</span><span style={{color:Y}}>{B2}</span></h5>
                    <label>Re-Enter the Password :</label>
                    <input type="password" name="rpass" value={c} onChange={len}></input>
                    <h5>{C}</h5>


                    
                </form>
            </div></center><br/>
          <center>  <input type="text" name="text" value={cl} onChange={val}></input><br/>
            <button onClick={click}>Click</button></center>

        </div>
    );
}
export default Length;