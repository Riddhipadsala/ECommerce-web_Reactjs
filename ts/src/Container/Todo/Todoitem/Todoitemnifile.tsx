import React from 'react';

interface Todoprops
{
  title?:string;
}

const Todoitem:React.FC<Todoprops>=(props)=>
{
  return <li>{props.title}</li>
}

export default Todoitem;