import Typography from 'typography'
import elkGlenTheme from 'typography-theme-elk-glen'

const typography = new Typography(elkGlenTheme)

export default typography



// custom
// const typography = new Typography({
//   baseFontSize: '18px',
//   baseLineHeight: 1.666,
//   headerFontFamily: ['Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
//   bodyFontFamily: ['Georgia', 'serif'],
//   // See below for the full list of options.
// })

// Output CSS as string.
// typography.toString()

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
// typography.injectStyles()