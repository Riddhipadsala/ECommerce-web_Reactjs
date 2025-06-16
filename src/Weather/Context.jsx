import {createContext,useContext,useState} from 'react';
import {fetchurl} from './Api/Fetch'
export const Wcontext = createContext(null);

export const useWeather=()=>{
  return useContext(Wcontext);
}



export const Provider =(props)=>{
  const [data,setdata]=useState(null);
  const [city,setcity]=useState(null);
  
  const fetchdata =async()=>{
  const response = await fetchurl(city);
  setdata(response);
}
return(
    <Wcontext.Provider value={{data,setcity,city,fetchdata}}>
    {props.children}
  </Wcontext.Provider>
  );

}