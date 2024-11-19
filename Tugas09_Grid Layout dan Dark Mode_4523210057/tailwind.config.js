module.exports = {
  content: ["./src/**/*.html"],
  darkMode: 'class', // Menambahkan opsi dark mode
  theme: {
    extend: {},
  },
  plugins: [],
  
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Warna biru khusus
        secondary: '#FBBF24', // Warna kuning khusus
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
}