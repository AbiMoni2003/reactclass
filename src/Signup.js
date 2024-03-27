import './Abi.css';
import {useEffect, useState} from 'react';
function Signup(){
    const [x,setX]=useState();
    const [y,sety]=useState();
    const [z,setz]=useState();
    const [z1,setz1]=useState();
    const Abi=(e)=>{
        if(e.target.name=='name'){setX(e.target.value);}
        if(e.target.name=='pass'){sety(e.target.value);}
        if(e.target.name=='cpass'){setz(e.target.value);}
        
        
        
    }
    useEffect(()=>{
        if(y!=z){setz1("password miss match");
    console.log(z,z1)}
    else{setz1()}
    },[z])

    return(
        <div>
            <div className="signa">
            <form>
                <label>Enter your Name :</label>
                <input type="text" onChange={Abi} name="name" value={x}></input><br/>
                <label>Enter your Password :</label>
                <input type="password" onChange={Abi} name="pass" value={y}></input><br/>
                <label>Conform Password :</label>
                <input type="password" onChange={Abi} name="cpass" value={z}></input>
                <h5>{z1}</h5>
                <center><button>Regiter</button></center>
               
            </form>
            </div>
        </div>

    );
}
export default Signup;