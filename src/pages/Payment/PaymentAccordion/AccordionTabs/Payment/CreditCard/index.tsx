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
      const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target;
        const maxLengths: { [key: string]: number } = {
            number: 19,
            expiry: 5,
            cvc: 3,
        };

        if (maxLengths[name] && value.length > maxLengths[name]) return;
        if (name === 'number') {
          const formattedValue = value
              .replace(/\D/g, '')
              .substring(0, 16)
              .replace(/(\d{4})/g, '$1 ')
              .trim();
          setState((prev) => ({ ...prev, [name]: formattedValue }));
          return;
      }
        if (name === 'expiry') {
          const formattedValue = value
              .replace(/\D/g, '')
              .substring(0, 4)
              .replace(/(\d{2})(\d{1,2})/, '$1/$2');
          setState((prev) => ({ ...prev, [name]: formattedValue }));
          return;
      }
        setState((prev) => ({ ...prev, [name]: value }));
    };
    
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
          <form className='mt-5 grid grid-cols-1 gap-2 text-black'>
                    <input
                        type="text"
                        name="number"
                        className='col-span-2 rounded border shadow p-2 bg-[#e8f0fe]'
                        placeholder="Kart Numarası"
                        value={state.number}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                    <input
                        type="text"
                        name="name"
                        className='col-span-2 rounded border shadow p-2 bg-[#e8f0fe]'
                        placeholder="Kart Üzerindeki İsim"
                        value={state.name}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        autoComplete='off'
                    />
                    <input
                    type="text"
                    name="expiry"
                    className="col-span-1 rounded border shadow p-2 bg-[#e8f0fe]"
                    placeholder="Ay / Yıl"
                    value={state.expiry}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    autoComplete="off"
                />
                    <input
                        type="number"
                        name="cvc"
                        className='col-span-1 rounded border shadow p-2 bg-[#e8f0fe]'
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
  