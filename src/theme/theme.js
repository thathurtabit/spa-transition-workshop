// Define what styled components base-theme will look like
const theme = {
    colors: {
        primary: '#f6ff56',
        secondary: '#59CD90',
        tertiary: '#17BEBB',
        quaternary: '#F79D84',
        light: '#F8F1FF',
        dark: '#404040',
        white: '#fff'
    },
    fonts: {
        baseSize: '16px',
        primary: `'Do Hyeon', sans-serif`,
        secondary: `'PT Sans', sans-serif`,
    },
    transition: {
        duration: '0.5s',
        cubicBez: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        easeOut: 'cubic-bezier(0.23, 1, 0.32, 1)',
    },
    breakpoints: {
        sm: '480px',
        md: '780px',
        lg: '960px',
        xl: '1200px',
        xxl: '1400px',
        horz: '960px',
    }
}

export default theme;