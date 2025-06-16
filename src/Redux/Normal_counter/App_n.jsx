import React from 'react';
import Counter from './counter';
import {useDispatch} from 'react-redux';
function Normalapp(){
  const disp = useDispatch();
  return(
    <div>
      <button onClick={()=>disp({type : "Incre"}) }>Incre</button>
      <Counter />
      <button onClick={()=>disp({type : "Decre"}) }>decre</button>
    </div>

    );
}

export default Normalapp;