export function Input({placeholder, onChange}) {

    return <>
        <input type="text" className="form-control" placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    </>

}