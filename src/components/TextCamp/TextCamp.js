export const TextCamp = (props) => {

    const placeholdermod = `${props.placeholder}...`;

    const inType = (e) => {
        props.Changed(e.target.value);
    }

    return (
        <div className="text-camp">
            <label>{props.label}</label>
            <input value={props.valor} onChange={inType} required={props.mandatory} placeholder={placeholdermod} ></input>
        </div>
    )
}
