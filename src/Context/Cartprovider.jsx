import React,{ createContext ,useState,useContext } from 'react';

export const Cartcontext = createContext(null);

export const useCart=()=>{
  const asses= useContext(Cartcontext);
return asses;
}

export const Cartprovider =(props)=>{
 const [item,setitem]=useState([]);
  return(
    <Cartcontext.Provider value={{item,setitem}}>
      {props.children}
    </Cartcontext.Provider>
    );
}