import React from 'react';
import {useWeather} from './Context';
const Card=()=>{
  const asses = useWeather();
  return(
    

      <div className="content">
        <img src={asses.data?.current?.condition?.icon} alt="pic"/>
        <h4>LONDIN, UNITED KINGDOM</h4>
        <h3>{asses.data?.location?.name}.C</h3>
      </div>
    
    );
}

export default Card;