import "./DropDown.css"

export const DropDown = (props) => {
    return (
        <div className="drop-down">
            <label>{props.label}</label>
            <select  onChange={e => props.Changed(e.target.value)} required={props.mandatory} value={props.valor}>
                <option value=''></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}