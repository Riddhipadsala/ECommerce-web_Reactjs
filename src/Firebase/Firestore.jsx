
import React,{useState} from 'react';
import {app} from './Firebasecon';
import {getFirestore,collection,addDoc,getDoc,doc,query,where,getDocs,updateDoc} from 'firebase/firestore'

const firestore=getFirestore(app);
const ref=doc(firestore,'cities',"IqSx5rjUcllK7F3pQCfv")


function Firestore(){
  
  const write=async()=>{
  const data=await addDoc(collection(firestore,'cities'),{
      name:'delhi',
      pincode:123
    });
  }
    
    const subdata=async()=>{
  const subdata=await addDoc(collection(firestore,'cities/IqSx5rjUcllK7F3pQCfv/place'),{
      placedes:'amazing'
    });
    alert(subdata.id);
 }
 
 const getdata=async()=>{
   const db=await getDoc(ref);
   alert(db.data())
 }
 
 const querywhere=async()=>{
   const collect=collection(firestore,"user")
   const q=query(collect,where("Name","==","Aayush")) 
   const getdata = await getDocs(q)
   getdata.forEach((data)=>alert(data.data()))
 }
 
 const update=async()=>{
   const updoc=doc(firestore,"cities/IqSx5rjUcllK7F3pQCfv")
   await updateDoc(updoc,{
     name:"new delhi"
   })
 }
  
  return(
    <>
      <h5>○ Firestore</h5>
      <button onClick={write}>put data</button>
     <button onClick={subdata}>put sub data</button>
  <button onClick={getdata}>Get data</button>
    <button onClick={querywhere}>Get query Where</button>
 <button onClick={update}>update data</button>
    </>
    );
}

export default Firestore;