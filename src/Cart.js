import {useState} from 'react';
import './Abi.css';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
function Cart(){
  //let A=[12,23,34,45];
 // A=A.filter(m=>m!=23);
 // console.log(A);

  const [Z,setZ]=useState([]);
  const Z2=Z.map((z)=><li key={z.toString()}>{z}</li>);
  
  const proc=()=>{
    
   setZ(Z.filter(m=>m!=Y));
   console.log(Z);
  }
  const w=(e)=>{
    if(e.target.name=="proc"){setY(e.target.value);}
   
   
  }

    const s=100;
    const l=50;
    const c=30;
    const [z,setz]=useState(0);
    const [x,setx]=useState(0);
    const [y,sety]=useState(0);
    const [X,setX]=useState();
    const [Y,setY]=useState();
    const [X1,setX1]=useState(1);
    const [X2,setX2]=useState();
   
    const Abishek=(e)=>{
        if(e.target.name=="shm"){sety(y+s);}
        console.log(e.target.name);
        if(e.target.name=="liq"){sety(y+l);}
        console.log(e.target.name);
        if(e.target.name=="coc"){sety(y+c);}
        console.log(e.target.name);
        if(e.target.name=="shm"){setX1(X1+1);}
        if(X1>1){setX2("Already Seclected");}
        console.log(X1);
        setx(x+1);
       
       Z.push(e.target.name);
       console.log(Z);
      

    }
    const Abi=(e)=>{
         setz(z+1);
         console.log(e.target.name);
      }
      const sub=(e)=>{
        if(z==0){setz(0)}
        if(z>0){setz(z-1);}
        console.log(e.target.name);

      }
   
    return(
        <div>
            <div className="a">
                <li className="c">Home</li>
                <li className="c">services</li>
                <li className="c">Contact</li>
                <li className="b"><i className="fa-solid fa-cart-shopping"></i> {x} </li>
                <li className="b"><i className="fa-sharp fa-solid fa-indian-rupee-sign " ></i> {y} </li>
                
            </div>
            <div className="d">
                <div className="e">
                <div className="card">
  <img className="card-img-top" src={img1} alt="Card image cap"/>
  <div className="jumbotron">
  <h1 className="display-4">Shampoo</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4"/>
  <h3 ><i className="fa-sharp fa-solid fa-indian-rupee-sign Rup" ></i>100</h3><div>
 <td> <a className="btn btn-primary btn-lg" onClick={Abishek}  role="button" name="shm" value={0}>Add Cart</a></td>
 <marquee>{X2}</marquee>
 <td className='tb'><button name="sub" onClick={sub}>-</button><input type="text" value={z}/><button name="ad" onClick={Abi}><i class="fa-thin fa-plus "></i></button></td>
 </div>
</div>
</div>
                </div>
                <div className="e">          <div className="card">
  <img className="card-img-top" src={img2} alt="Card image cap"/>
  <div className="jumbotron">
  <h1 className="display-4">Off!</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4"/>
  <h3 ><i className="fa-sharp fa-solid fa-indian-rupee-sign Rup" ></i>50</h3><div>
 <td> <a className="btn btn-primary btn-lg" onClick={Abishek} role="button" name="liq">Add Cart</a></td>
  <td className='tb'><button>-</button><input type="text" value={z}/><button><i className="fa-thin fa-plus "></i></button></td>
  </div>
</div>
</div></div>
                <div className="e">          <div className="card">
  <img className="card-img-top" src={img3} alt="Card image cap"/>
  <div className="jumbotron">
  <h1 className="display-4">Coca Cola</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4"/>
  <h3 ><i className="fa-sharp fa-solid fa-indian-rupee-sign Rup" ></i>30</h3><div>
  <td><a className="btn btn-primary btn-lg" onClick={Abishek} role="button" name="coc" value="30">Add Cart</a></td>
  <td className='tb'><button>-</button><input type="text" value={z}/><button><i className="fa-thin fa-plus "></i></button></td>
  </div>
</div>
</div></div>
                    </div>
                    <div className='cart1'>

                    </div><br/>
                   <h5>{X}</h5>
               <center> <input type="tetx" name="proc" value={Y} onChange={w}></input> <i className="fa-solid fa-xmark" name="can" onClick={proc} role="button"></i></center>   
             <ul>{Z2}</ul>
                 </div>
    );

}
export default Cart;