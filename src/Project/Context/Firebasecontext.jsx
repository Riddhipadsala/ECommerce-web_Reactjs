import React, { createContext, useContext,useState,useEffect } from 'react';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,
  GoogleAuthProvider,signInWithPopup
,onAuthStateChanged} from 'firebase/auth';

import {getFirestore,addDoc,collection,getDocs,getDoc,doc,query,where} from 'firebase/firestore'


const FirebaseContext = createContext(null);

// Bookify config only
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHfAf6gvDrn4KHNPFYlFW8Wi1OB58MZLs",
  authDomain: "bookify-7865a.firebaseapp.com",
  projectId: "bookify-7865a",
  storageBucket: "bookify-7865a.firebasestorage.app",
  messagingSenderId: "900861247654",
  appId: "1:900861247654:web:ef5c164b0b9e4c175cf467"
};

// Initialize Firebase


// Safe initialization
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const firestore=getFirestore(app);
const google=new GoogleAuthProvider();
// Signup function


// Hook
export const useFirebase = () => useContext(FirebaseContext);

// Context provider
export const FirebaseProvider = ({ children }) => {
  
  const [user,setuser]=useState(null);
  useEffect(()=>{
    onAuthStateChanged(auth,user=>{
      if(user) setuser(user);
      else setuser(null);
    })
  },[])
  
  const isloggin = user ? true : false;
  
  const signup = (email, pass) => {
  createUserWithEmailAndPassword(auth, email, pass);
  };
  
  const signin =async (email, pass) => {
 await signInWithEmailAndPassword(auth, email, pass);
};

const googlesignin = () => {
  signInWithPopup(auth,google);
};

const store=async(name,isbnno,price,coverpic)=>{
  const data=await addDoc(collection(firestore,'bookList'),{
    name,
    isbnno,
    price,
    userId : user.uid,
    userEmail : user.email,
    displayName : user.displayName
  })
}

  
const getdata=async()=>{
  return getDocs(collection(firestore,'bookList'))
}

const getbookbyid=async(id)=>{
  const datas=doc(firestore,"bookList" ,id)
  const givedata=await getDoc(datas)
  return givedata;
}

const order=async(bookid,qty)=>{
  const order=await addDoc(collection(firestore,"bookList",bookid,"order"),{
  userId : user.uid,
 userEmail : user.email,
 
 qty: Number(qty)
})
}

const seeord=async(userId)=>{
  if(!user) return null;
  const collectref=collection(firestore,"bookList")
   const q=query(collectref,where("userId","==",userId)) 
   const getdata = await getDocs(q);
   return getdata;
   
}

  return (
    <FirebaseContext.Provider value={{ app, signup,signin,googlesignin,isloggin,store,getdata,getbookbyid,order,seeord,user}}>
      {children}
    </FirebaseContext.Provider>
  );
};