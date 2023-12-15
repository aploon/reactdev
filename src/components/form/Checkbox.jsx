export function Checkbox({id, onChange}) {

    return <div className="form-check mt-2">
        <input id={id} type="checkbox" className="form-check-input" onChange={(e) => onChange(e.target.checked)} />
        <label className="form-check-label" htmlFor={id}>
            N'afficher que les produits en stocks
        </label>
    </div>

}