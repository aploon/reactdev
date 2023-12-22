import { useState } from "react"

function App() {

    // state (etat, donnees)
    [count, setCount] = useState(0)

    // comportements
    handleClick = (e) => {
        setCount(count + 1)
    }

    // affichage (render)
    return <>
        <div className="container mt-2 m-auto" style={{minWith: "350px"}}>
            <h1>Compteur</h1>
            <p>{count}</p>
            <button onClick={handleClick}>Click</button>
        </div>
    </>
}

export default App