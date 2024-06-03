export default function IconButton({onClick, children}) {
    return (
        <button
            className="max-w-8"
            onClick={onClick}
        >
            {children}
        </button>
    )
}
