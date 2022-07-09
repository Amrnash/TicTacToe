import "./Button.css"
export const Button = ({ text, ...props }) => {
    return(
        <button className="btn" {...props}>
            {text}
        </button>
    )
}