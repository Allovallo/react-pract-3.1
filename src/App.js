import './App.css';
import Counter from 'components/Counter';

function App() {
  return (
    <div>
      <Counter initialValue={10} step={5}></Counter>
    </div>
  );
}

export default App;
