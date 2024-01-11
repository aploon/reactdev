import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Démarre un timer qui incrémente le compteur toutes les 1000 millisecondes (1 seconde)
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Nettoie le timer lorsque le composant est démonté
    return () => clearInterval(timer);
  }, [count]); // Le tableau vide [] indique que cet effet ne dépend d'aucune variable d'état ou de propriété

  return (
    <div>
        <input type="number" onChange={e => setCount(Number(e.target.value))}/>
        <h1>Compteur automatique : {count}</h1>
    </div>
  );
}

export default App;
