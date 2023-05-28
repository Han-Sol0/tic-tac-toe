
import './App.css';

function App() {
  return (
    <div className='App'>
      {
        Array.apply(null, { length: 9 }).map((e, i) => <button className='button' onClick={() => {}} key={i}>{'-'}</button>)
      }
    </div>
  );
}

export default App;
