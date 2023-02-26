import React from "react";
const Resturant=(props)=>{
    return (
        <div className="Resturant">
      <img src={props.src}></img>

        <h5>{props.name}</h5>
        <a href="#"> <button>View Menu</button></a>
        
       

     </div>

     
    )
}
export default Resturant;