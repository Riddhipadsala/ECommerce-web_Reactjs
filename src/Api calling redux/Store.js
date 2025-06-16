import {configureStore} from '@reduxjs/toolkit';
import slicereducer from './Slice';

export const store= configureStore({
  reducer:{
    todo:slicereducer
  }
})