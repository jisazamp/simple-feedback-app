module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customRed: '#e63946',
        customWhite: '#f1faee',
        customBlue1: '#a8dadc',
        customBlue2: '#457b9d',
        customBlue3: '#1d3557',
      },
    },
  },
  plugins: [],
};
