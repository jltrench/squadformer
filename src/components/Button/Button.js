import "./Button.css"

export const Button = (props) => {
    return (
        <div className="btn-container">
            <button className="btn">
            {props.children}
            </button>
        </div>
    )
}