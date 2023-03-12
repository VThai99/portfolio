module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        site: "url('/public/assets/site-bg.jpg')",
        about: "url('/public/assets/image2.png')",
        service: "url('/public/assets/image3.png')",
        avata: "url('/public/assets/image4.png')",
        avatachange: "url('/public/assets/image4change.png')"
      },
    },
  },
  plugins: [],
};
