import { useState } from "react"

function App() {

    // state (etat, donnees)
    let [count, setCount] = useState(0)

    // comportements
    let handleClick = (e) => {
        setCount(count + 1)
    }

    // affichage (render)
    return <>
        <div className="container mt-2 m-auto" style={{minWith: "350px"}}>
            <h1>Compteur</h1>
            <p>{count}</p>
            <button className="btn btn-primary" onClick={handleClick}>Click</button>
        </div>
    </>
}

export default App