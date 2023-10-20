interface ButtonProps {
    text: string;
    type?: "button" | "submit";
    className?: string;
}

const Button = ({text, className, type = "button"}: ButtonProps) => {
    return (
        <button
            type={type}
            className={`px-4 py-2 text-white rounded-full bg-slate-900 ${className}`}
        >
            {text}
        </button>
    );
}


export default Button;