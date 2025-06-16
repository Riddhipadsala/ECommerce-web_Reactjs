import React from 'react';
import Todoitem from './Todoitem/Todoitemnifile'; // Make sure the file path is correct

interface Todoarray {
  id: number;
  title: string;
}

interface Todoprops {
  items: Todoarray[];
}

const Todo: React.FC<Todoprops> = (props) => {
  return (
    <div>
      <ol>
        {props.items.map((itm) => (
          <Todoitem key={itm.id} title={itm.title} />
        ))}
      </ol>
    </div>
  );
};

export default Todo;