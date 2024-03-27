import { useState} from 'react';
import { useEffect } from 'react';
import './Display.css';
function Display(){
    const [a,seta]=useState();
    const [x,setx]=useState();
    const [b,setb]=useState();
    const [c,setc]=useState();
    const [X,setX]=useState();
    const [Y,setY]=useState(0);
    const Abi=(e)=>{
        if(e.target.name=="pass"){seta(e.target.value);
            console.log(a);
        let x=e.target.value.length;
        setx(x);
    console.log(x);}
    }
    const Abishek=()=>{
        if(x<8){setb("weak")}
    }
    useEffect(()=>{
       if(x>=8){setX("block");
    }
    else{setX("none")}
      
    },[a])
   
    const [Z,setZ]=useState(0);
    const Abis=()=>{
        setY(2);}
       
        
        useEffect(()=>{setY(Z)},[Z])
    return(
        <div>
            <div className='a'>
                <p className="b">Ajith Kumar (born 1 May 1971) is an Indian actor who works predominantly in Tamil cinema. To date, he has starred in over 60 films, and his awards include four Vijay Awards, three Cinema Express Awards, three Filmfare Awards South and three Tamil Nadu State Film Awards. In addition to his acting, Ajith is also a sports car racer and participated in the MRF Racing series (2010).</p>
            </div>
           <center> <div className="A">
            <button onClick={Abis} >Show form</button>
              {Y>0 && 
                <form>
                    <label>Enter your e-mail :</label>
                    <input type="text"></input><br/>
                    <label>Enter your password :</label>
                    <input type="password" name="pass" onChange={Abi} value={a}></input><br/>
                    <button name="button" onClick={Abishek} value={X} style={{display:X}}>Register</button>
                   
                </form>}
                <button  value={Z} onClick={setZ}>hide</button>
                <h1>{b}</h1>
            </div></center>
            <input type="range" name="ran" min="0" max="1000" value="120"></input><br/>
            <a href="">Click</a>
        </div>
    );
}
export default Display;