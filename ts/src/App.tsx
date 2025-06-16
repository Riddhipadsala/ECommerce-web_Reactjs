// src/App.tsx
import { useAppDispatch, useAppSelector } from './Redux/Hooks/Hooksnifile';
import { increment, decrement } from './Redux/Slices/Likecounter/Likenifile';

function App() {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())} style={{ margin: '0 10px' }}>
        Increase
      </button>
      <button onClick={() => dispatch(decrement())}>
        Decrease
      </button>
    </div>
  );
}

export default App;