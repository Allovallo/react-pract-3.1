import './App.css';
import Counter from 'components/Counter';
import Toggle from 'components/Toggle';
import Btn from 'components/Button';
import LoginForm from 'components/Form';
import SignUpForm from 'components/FormComplic';
import FormMini from 'components/FormMini';

function App() {
  return (
    <div>
      {/* <Counter initialValue={10} step={5}></Counter>
      <Toggle></Toggle>
      <Btn></Btn>
      <LoginForm onSubmit={values => console.log(values)}></LoginForm> */}
      <SignUpForm onSubmit={values => console.log(values)}></SignUpForm>
      {/* <FormMini onSubmit={values => console.log(values)}></FormMini> */}
    </div>
  );
}

export default App;
