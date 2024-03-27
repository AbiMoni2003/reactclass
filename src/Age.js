import { useEffect } from 'react';
import {useState} from 'react';
function Age(){
    const [a,seta]=useState();
    const [b,setb]=useState();
    const [c,setc]=useState();
    const [d,setd]=useState();

   
    const Abi=(e)=>{
        if(e.target.name=="year"){seta(e.target.value);}
        console.log(a);
        if(e.target.name=="cyear"){setb(e.target.value);}
        console.log(b);
    }
    const abi=()=>{
        setd(b-a);
    }
    useEffect(()=>{setd(d)},[b])

    return(
        <div>
            <div className="age1">
                <form>
                    <label>Enter your birth Year :</label>
                    <input type="number" name="year" value={a} onChange={Abi}></input>
                    
                    <label>Enter the current year :</label>
                    <input type="number" name="cyear" value={b} onChange={Abi}></input>
                    
                    <button name="button" value={c} onClick={abi}>Calculate</button>
                    <p>Your age is {d}</p>
                </form>
            </div>
        </div>
    );
}
export default Age;