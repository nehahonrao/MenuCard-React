import React from 'react';
import "./style.css";

function Navbar({filterItem,uniqueData}) {
  return <>
   <nav className="navbar">
        <div className="btn-group">

{uniqueData.map((currentElem)=>{
  return(
    <button className="btn-group__item" 
    onClick={()=>filterItem(currentElem)} >
   {currentElem}
    </button>
       
  )
})} 
</div>
</nav>
         
  </>;
}

export default Navbar;
