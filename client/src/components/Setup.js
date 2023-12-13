import React, { useState } from "react";
import { Link} from "react-router-dom";

const Setup = ({maxBooks,setMax}) => {

 const handleMaxBooksChange = (e) => {
  setMax(parseInt(e.target.value));
 };




 return (
  <div>
   <h1 style={{color:"white",textAlign:"center"}}>Bookstore Setup</h1>
   <div style={{color:"white",textAlign:"center",fontSize:"20px"}} >
<label htmlFor="maxBooks">Maximum Number of Books : </label>
   <input
    type="number"
    id="maxBooks"
    value={maxBooks}
    onChange={handleMaxBooksChange}
   />
   </div>
   <div style={{textAlign:"center",marginTop:"20px"}}>
 <Link to={"/main-menu"}>
   <button className="btn btn-primary btn-lg btn-block mb-2" >Go to Main Menu</button>
   </Link>
   </div>
  
   
  </div>
 );
};

export default Setup;
