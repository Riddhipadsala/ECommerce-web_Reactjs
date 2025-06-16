import { useDispatch, useSelector } from 'react-redux';
import { fetchdata } from './Slice';

function App_js() {
  const dispatch = useDispatch();
  const data = useSelector(state => state);

  if (data.todo.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <button onClick={() => dispatch(fetchdata())}>Fetch Data</button>
      
        {data.todo.data && data.todo.data.map((e) => (
          <li key={e.id}>{e.title}</li>
        ))}
      
    </div>
  );
}

export default App_js;