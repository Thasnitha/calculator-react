import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(''); 

  const handleClick = (e) => {
    setInput(input + e.target.value);  
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleEquals = () => {
    try {
      setResult(eval(input).toString());  
    } catch (error) {
      setResult('Error');  
    }
  };

  return (
    <div>
    
    <div style={{background:'white',height:'100px',width:'100px'}} className='calculator'>
      <div  className='display'>
        <h1 style={{ marginLeft:'500px' }}>Calculator</h1>
        <form>
          <input
            style={{
              height: '70px',
              width: '400px',
              marginLeft: '400px',
              textAlign: 'right',
              outline: 'none',
              background: 'black',
              color: 'white',
              border:'none',
              marginTop:'60px',
              fontSize:'30px'
              
            }}
            placeholder='0'
            type='text'
            value={input} 
            readOnly
          />
          <input
            style={{
              height: '40px',
              width: '400px',
              marginLeft: '400px',
              textAlign: 'right',
              outline: 'none',
              color: 'white',
              background:'black',
              border:'none',
              marginTop:'-50px',
              fontSize:'30px'



            }}
            type='text'
            value={result} 
            readOnly
            placeholder='Result'
          />
        </form>
        </div>
        <div className='buttons' style={{ marginLeft: '400px',marginBottom:'100px', }}>
          <button style={{ width: '133px',marginTop:'40px' }} onClick={handleClear}>AC</button>
          <button style={{ width: '133px',marginTop:'40px'  }} onClick={handleDelete}>DEL</button>
          <button style={{ width: '133px',marginTop:'40px'  }} value='/' onClick={handleClick}>/</button>
          <br />
        </div>

        <div className='button2' style={{ marginLeft: '400px' }}>
          <button value='7' onClick={handleClick}>7</button>
          <button value='8' onClick={handleClick}>8</button>
          <button value='9' onClick={handleClick}>9</button>
          <button value='*' onClick={handleClick}>*</button>
          <button value='4' onClick={handleClick}>4</button>
          <button value='5' onClick={handleClick}>5</button>
          <button value='6' onClick={handleClick}>6</button>
          <button value='+' onClick={handleClick}>+</button>
          <button value='1' onClick={handleClick}>1</button>
          <button value='2' onClick={handleClick}>2</button>
          <button value='3' onClick={handleClick}>3</button>
     
          <button value='-' onClick={handleClick}>-</button>
          <button value='0' onClick={handleClick}>0</button>
          <button onClick={handleEquals}>=</button>
      
          <button value='(' onClick={handleClick}>(</button>
          <button value=')' onClick={handleClick}>)</button>
        </div>
      </div>
    
    </div>
  );
}

export default App;
