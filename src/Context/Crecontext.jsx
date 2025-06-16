import { createContext,useState} from 'react';

export const Countercontext=createContext(null);

export const Cprovider=(props)=>{
  const [count,setcount]=useState(0);
  return(
      <Countercontext.Provider value={{count,setcount,name:'raha'}}>
    {props.children}
  </Countercontext.Provider>
  );

};