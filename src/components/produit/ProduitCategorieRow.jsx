export function ProduitCategorieRow({categorie}) {

    const style = {
        backgroundColor: "#f2f2f2",
        fontWeight: "bold",
        textAlign: "center"
    }
    return <>
        <tr>
            <td style={style} colSpan="2">{categorie}</td>
        </tr>
    </>

}