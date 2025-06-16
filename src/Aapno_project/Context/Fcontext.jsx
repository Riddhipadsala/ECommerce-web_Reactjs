import React,{createContext,useContext,useState,useEffect}from 'react';

import { initializeApp } from "firebase/app";
import { getAuth,onAuthStateChanged, createUserWithEmailAndPassword
,signInWithEmailAndPassword,
  GoogleAuthProvider,signInWithPopup
} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAxqvviVzVsoeXSslmrDK-Y_FZb4vG2QsY",
  authDomain: "app-6bc2d.firebaseapp.com",
  databaseURL: "https://app-6bc2d-default-rtdb.firebaseio.com",
  projectId: "app-6bc2d",
  storageBucket: "app-6bc2d.firebasestorage.app",
  messagingSenderId: "432078694650",
  appId: "1:432078694650:web:6980d5e5d4ff55576f4143"
};


const app = initializeApp(firebaseConfig);



const context= createContext(null);
const google=new GoogleAuthProvider();
export const useFirebase=()=>useContext(context);

//ACTUAL Function
export const FProvider=({children})=>{
  const [item, setitem] = useState(() => {
    const saved = localStorage.getItem('cartItems');
    return saved ? JSON.parse(saved) : [];
  });

  
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(item));
  }, [item]);
  
const auth=getAuth(app);
const [user,setuser]=useState();
const [count,setcount]=useState(0);
useEffect(()=>{
  onAuthStateChanged(auth,(user)=>{
    if(user) setuser(user);
    else setuser(null);
  })
},[])

const islogin=user ? true : false;



const signup=(email,pass)=>{
  createUserWithEmailAndPassword(auth,email,pass)
}

const signin=(email,pass)=>{
  signInWithEmailAndPassword(auth,email,pass)
}

const signwithgoogle=()=>{
  signInWithPopup(auth,google)
}
  
  return(
    <>
      <context.Provider value={{signup,signin,signwithgoogle,islogin,item,setitem,count,setcount,name:'raha'}}>
        {children}
      </context.Provider>
    </>
    );
}