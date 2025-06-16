
import {createStore} from 'redux';

const Reducer=(state=0,action)=>
{
  switch(action.type)
  {
    case 'Incre': return state+1;
  case 'Decre': return state-1;
  default : return state;
  }
}

export const reduxstore = createStore(Reducer);

