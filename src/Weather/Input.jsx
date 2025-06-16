import React from 'react';
import {useWeather} from './Context';
const Input=()=>{
  const asses= useWeather();
  return(
    
    
      
<input value={asses.city} placeholder="search here" className="input" onChange={(e)=> asses.setcity(e.target.value)}></input>
    
    );
}

export default Input;