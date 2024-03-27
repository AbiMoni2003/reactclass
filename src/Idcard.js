import './Abi.css';
import {useState} from 'react';
import { useEffect } from 'react';
function Idcard(){
    const [a,seta]=useState();
    const [b,setb]=useState();
    const [c,setc]=useState();
    const [d,setd]=useState();
    const [e,sete]=useState();
    const [A,setA]=useState();
    const [B,setB]=useState();
    const [C,setC]=useState();
    const [D,setD]=useState();
    const [E,setE]=useState();

    const Abishek=(e)=>{
        if(e.target.name=='name'){seta(e.target.value);}
        if(e.target.name=='dob'){setb(e.target.value);}
        if(e.target.name=='coll'){setc(e.target.value);}
        if(e.target.name=='dept'){setd(e.target.value);}
        if(e.target.name=='roll'){sete(e.target.value);}
        }
    useEffect(()=>{setA(a)},[a])
    useEffect(()=>{setB(b)},[b])
    useEffect(()=>{setC(c)},[c])
    useEffect(()=>{setD(d)},[d])
    useEffect(()=>{setE(e)},[e])
    return(
        <div>
            <div className="id1">
                <div className="id2">
                 <center>  <div className='id3'>
                    <form>
                        <label>Enter your Name :</label>
                        <input type="text" name='name' value={a} onChange={Abishek}></input><br/>
                        <label>Enter your DOB :</label>
                        <input type="date" name='dob' value={b} onChange={Abishek}></input><br/>
                        <label>Enter your college name :</label>
                        <input type="text" name='coll' value={c} onChange={Abishek}></input><br/>
                        <label>Enter your department :</label>
                        <input type="text" name='dept' value={d} onChange={Abishek}></input><br/>
                        <label>Enter your roll.NO :</label>
                        <input type="number" name='roll' value={e} onChange={Abishek}></input>

                    </form>
                    </div></center> 
                </div>
                <div className="id2">
                 <center>  <div className='id4'>
                            <h3 className='id5'>{c}</h3>
                            <hr/>
                            <h5>STUDENT ID CARD</h5>
                            <hr/>
                            <div className='id6'>
                            <i className="fa-regular fa-user icon"></i>
                            </div>
                            <h5>Name :{a}</h5>
                            <h6>DOB :{b}</h6>
                            <h6>Dept :{d}</h6>
                            <h6>Roll.NO :{e}</h6>
                    </div></center>  <br/>
                   <center> <button>Download</button></center>
                </div>
            </div>
        </div>
    );
}
export default Idcard;