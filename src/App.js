import './App.css';
import Counter from 'components/Counter';
import Toggle from 'components/Toggle';
import Btn from 'components/Button';
import LoginForm from 'components/Form';

function App() {
  return (
    <div>
      <Counter initialValue={10} step={5}></Counter>
      <Toggle></Toggle>
      <Btn></Btn>
      <LoginForm></LoginForm>
    </div>
  );
}

export default App;
