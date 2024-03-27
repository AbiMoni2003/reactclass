function Array(){
    const a=2;
    const A=[1,2,3,4,5,6,7,8,9,10];
 
   const C=A.map((y)=><li key={y.toString()}>{y} X 2={y*2}</li>);
   const B= A.map((x)=><li key={x.toString()}>{x*a}</li>);

    return(
        <div>
           <h1>{C}</h1>
        </div>
    );
}
export default Array;