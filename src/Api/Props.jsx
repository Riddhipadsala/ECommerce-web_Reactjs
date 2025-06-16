import React from 'react';

const Propss=(props)=>{
  return(
     <div style={{padding: '80px',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'}}>
    <h2>{props.title}</h2>
  <p>{props.body}</p>  
  </div>
  );
 
}

export default Propss;