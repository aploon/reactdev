import { useState } from "react"

function App() {

    // state (etat, donnees)
    const [fruits, setFruits] = useState([
        { id: 1, nom: "Abricot" },
        { id: 2, nom: "Banane" },
        { id: 3, nom: "Cerise" }
    ])

    // comportements
    let removeFruit = (id) => {
        setFruits(
            fruits.filter((fruit) => fruit.id !== id)
        )
    }

    let addFruit = (e) => {
        e.preventDefault()
        let fruitName = e.target.fruitName.value
        setFruits([...fruits, { id: fruits.length + 1, nom: fruitName }])

        // Vider le champ input
        e.target.fruitName.value = ""
    }

    // affichage (render)
    return <>
        <div className="container mt-2 m-auto" style={{ minWith: "350px" }}>
            <h1>Listes de fruits</h1>
            <form action="submit" onSubmit={addFruit}>
                <div className="form-group mb-3">
                    <input className="form-control" name="fruitName" type="text" placeholder="Ajouter un fruit..." />
                </div>
                <button className="btn btn-primary" hidden>Ajouter +</button>
            </form>
            <ul>
                {fruits.map((fruit) => {
                    return <li key={fruit.id}>
                        {fruit.nom} <button className="btn btn-secondary" onClick={() => removeFruit(fruit.id)}>x</button>
                    </li>
                })}
            </ul>
        </div>
    </>
}

export default App