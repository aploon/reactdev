export function ProduitRow({produit}) {

    let style = (!produit.stocked) ? {color: 'red'} : undefined

    return <>
        <tr>
            <td style={style}>{produit.name}</td>
            <td>{produit.price}</td>
        </tr>
    </>

}