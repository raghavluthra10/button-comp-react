import './App.css';
import ButtonComp from './ButtonComp';
import { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import Memo from './Memo';

function App() {

  const [ amount, setAmount ] = useState('');
  const [ finalAmount, setFinalAmount ] = useState();
  const [ checked, setChecked ] = useState(true);

  const toggleChecked = () => {
    setChecked(!checked)
  }

  const addClick = (e) => {
    e.preventDefault();
    setFinalAmount(amount)
    setAmount('')
    console.log(finalAmount)
  }


  return (
    <div className={ checked ? 'app' : 'app__dark' } >
      <Memo />

      <form className={checked ? 'app__form' : 'app__form__dark'}>

        {finalAmount ? finalAmount : 0}

        <Switch 
        onClick={toggleChecked}
         />

        <input 
          type='number' 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)}  
        />
        
        <ButtonComp
          className='app__btnComp'
          text='Add Amount' 
          btnSize='wide' 
          btnType={checked ? 'secondary' : 'primary'} 
          onClick={addClick} 
          type='submit'
        />
      </form>
      

    </div>
  );
}

export default App;
