import React,{useState} from 'react';
import Draggable from 'react-draggable';

const Text = () => {
  const [editmode,seteditmode]=useState(false);
  const [val,setval]=useState("double click to change");
  const nodeRef = React.useRef(null);
  
  return (
    <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef}>
       {
         editmode ? <input onDoubleClick={(e)=> seteditmode(false)} value={val} onChange={(e)=> setval(e.target.value)}/> : <h1 onDoubleClick={(e)=> seteditmode(true)}>{val}</h1>
       }
      </div>
    </Draggable>
  );
};

export default Text;