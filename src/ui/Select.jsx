export default function Select({id, name, options = []}) {
    return (
        <select
            id={id}
            name={name}
            defaultValue={options[0] ? options[0].value : ""}
            className="
                w-full
                p-2 h-10
                border-0
                rounded-lg
                bg-brand-lightgray
                text-black
                text-md
            ">
            {options.map(({label, value, disabled}) => (
                <option key={label} value={value} disabled={disabled}>
                    {label}
                </option>))}
        </select>
    )
}
