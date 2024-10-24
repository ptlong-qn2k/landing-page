/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            '2xl': { max: '1535px' },
            xl: { max: '1279px' },
            '2lg': { max: '1118px' },
            lg: { max: '1023px' },
            '2md': { max: '873px' },
            md: { max: '767px' },
            sm: { max: '639px' },
        },
        extend: {
            content: {
                left: 'url("../public/images/left.png")',
            },
        },
    },
    plugins: [],
};
