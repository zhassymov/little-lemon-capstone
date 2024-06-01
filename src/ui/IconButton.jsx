export function IconButton({onClick, src, alt}) {
    return (
        <button
            className="max-w-8"
            onClick={onClick}
        >
            <img src={src} alt={alt}/>
        </button>
    )
}
