import { useState } from "react"
import { Input } from "./components/form/Input"
import { Checkbox } from "./components/form/Checkbox"
import { ProduitCategorieRow } from "./components/produit/ProduitCategorieRow"
import { ProduitRow } from "./components/produit/ProduitRow"

// Tous les produits de notre app
const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

function App() {

    const [showStockedOnly, setShowStockedOnly] = useState(false)
    const [search, setSearch] = useState('')

    let produitVisible = PRODUCTS.filter((product) => {
        
        if(showStockedOnly) {
            return product.stocked && product.name.toLowerCase().includes(search.toLowerCase())
        }else{
            return product.name.toLowerCase().includes(search.toLowerCase())
        }

    })

    return <div className="Container w-25 m-auto" style={{minWidth: "350px"}}>
        <SearchBar onShowStockedOnly={setShowStockedOnly} onSearch={setSearch}></SearchBar>
        <ProduitTable produits={produitVisible}></ProduitTable>
    </div>
}


function SearchBar({onShowStockedOnly, onSearch}) {

    return <div className="mt-3">
        <Input placeholder="Rechercher..." onChange={onSearch}></Input>
        <Checkbox id="formCheckbox" onChange={onShowStockedOnly}></Checkbox>
    </div>

}

function ProduitTable({produits}) {

    let rows = []
    let lastCategorie = ""

    for (let produit of produits) {

        if (produit.category != lastCategorie) {
            rows.push(<ProduitCategorieRow key={produit.category} categorie={produit.category}></ProduitCategorieRow>)
        }

        rows.push(<ProduitRow key={produit.name} produit={produit}></ProduitRow>)

        lastCategorie = produit.category
    }

    return <div>
        <table className="table">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prix</th>
                </tr>
            </thead>

            <tbody>
                {rows}
            </tbody>
        </table>
    </div>

}

export default App
