import React, { useContext } from 'react';
import { Countercontext } from './Crecontext'; // Correct import here

const Counter = () => {
  const assesval = useContext(Countercontext); // Hook must use correct context

  return (
    <div>

      <button onClick={() => assesval.setcount(assesval.count + 1)}>Increment</button>
      <button onClick={() => assesval.setcount(assesval.count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;