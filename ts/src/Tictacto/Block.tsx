import React from 'react';

interface blockpropas
{
  value?: string;
  onClick?:()=>void
}

const Block:React.FC<blockpropas>=(props)=>{
 return <div className="block" onClick={props.onClick}>{props.value}</div>
}

export default Block;