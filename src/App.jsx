import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(3)

  let autoCount = () => {

    timer =  setInterval(() => {
        setCount(v => v - 1)
        if(count == 0){
            clearInterval(timer) 
        }
    }, 1000);
    
  }

  return (
    <div>
        <input type="number" onChange={e => {setCount()}}/>
        <h1>Compteur automatique : {count}</h1> 
    </div>
  );
}

export default App;
