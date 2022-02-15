import { useState } from "react"
import userContext from "../Users/userContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

export default function Productscreate(){

    let productInfo = useContext(userContext);

    let [Name,setname] = useState("");
    let [Category,setCategory] = useState("");
    let [Price,setPrice] = useState("");  

    var history=useHistory()
    
    let productSubmit = (e) => {
        e.preventDefault();
        productInfo.setProductData([...productInfo.productData, {
            Name,
            Category,
            Price
        }])
        history.push("/products");
    }
    return <>
    
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h1>Create Product Form</h1>
            </div>
        </div>
    <form onSubmit={productSubmit}>
    <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Name</label>
      <input type="text" class="form-control" value={Name} onChange={(e)=>setname(e.target.value)}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Category</label>
      <input type="text" class="form-control" value={Category} onChange={(e)=>setCategory(e.target.value)} />
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Price</label>
      <input type="number" class="form-control" value={Price} onChange={(e)=>setPrice(e.target.value)} />
    </div>
    <div className="col-md-12">
        
            <input class="btn btn-primary" type="submit" value="submit"/>
       
    </div>
   </div>
   </form>
   </div>
    </>
}