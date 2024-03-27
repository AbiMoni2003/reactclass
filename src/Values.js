import './values.css';
function Values(x){
    console.log(x.ke);
    console.log(x.data[0].Price);
     return(
        <div>
            <h1>Welcome to Values Component</h1>
            
         
            <div>
                <table>
                    <tr><th>Item Name</th><th>Price</th><th>Brand</th></tr>
                    {x.ke}
                </table>
            </div>
            {x.data.Price}
        </div>
    );
}
export default Values;