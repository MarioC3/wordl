const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['IBM Plex Serif', ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
