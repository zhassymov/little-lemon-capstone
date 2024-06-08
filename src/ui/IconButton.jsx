export default function IconButton({onClick, children}) {
    return (
        <button
            className="max-w-8 md:hidden"
            onClick={onClick}
        >
            {children}
        </button>
    )
}
