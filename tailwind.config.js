/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "brand-yellow": 'rgb(var(--color-brand-yellow) / <alpha-value>)',
                "brand-green": 'rgb(var(--color-brand-green) / <alpha-value>)',
            },
        },
    },
    plugins: [],
}
