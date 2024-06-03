/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'xs': '425px',
            },
            colors: {
                "brand-yellow": 'rgb(var(--color-brand-yellow) / <alpha-value>)',
                "brand-green": 'rgb(var(--color-brand-green) / <alpha-value>)',
                "brand-orange": 'rgb(var(--color-brand-orange) / <alpha-value>)',
                "brand-lightgray": 'rgb(var(--color-brand-lightgray) / <alpha-value>)',
            },
        },
    },
    plugins: [],
}
