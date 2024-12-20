import { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
const Credit = () => {
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '' as 'number' | 'expiry' | 'cvc' | 'name',
      });
      const handleInputChange = (evt:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target;
        
        setState((prev) => ({ ...prev, [name]: value }));
      }
    
      const handleInputFocus = (evt:React.ChangeEvent<HTMLInputElement>) => {
        const focus = evt.target.name as 'number' | 'expiry' | 'cvc' | 'name';
        setState((prev) => ({ ...prev, focus }));
      }
      return (
        <div>
          <Cards
            number={state.number}
            expiry={state.expiry}
            cvc={state.cvc}
            name={state.name}
            focused={state.focus}
          />
          <form className='mt-5 grid grid-cols-1 gap-2'>
                    <input
                        type="number"
                        name="number"
                        className='col-span-2 rounded border border-2 shadow'
                        placeholder="Card Number"
                        value={state.number}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                    <input
                        type="text"
                        name="name"
                        className='col-span-2 rounded border border-2 shadow'
                        placeholder="Full Name"
                        value={state.name}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        autoComplete='off'
                    />
                    <input
                        type="number"
                        name="expiry"
                        className='col-span-1 rounded border border-2 shadow'
                        placeholder="Card Expiry"
                        value={state.expiry}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        autoComplete='off'

                    />
                    <input
                        type="number"
                        name="cvc"
                        className='col-span-1 rounded border border-2 shadow'
                        placeholder="CVC"
                        value={state.cvc}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        autoComplete='off'

                    />
                </form>
        </div>
      );
  };
  
  export default Credit;
  