module.exports = {
  theme: {
    extend: {
      colors: {
        customBlue: '#1DA1F2',
      },
    },
  },
  plugins: [],
  content: [
    "./app/app/**/*.{js,jsx,ts,tsx}",  // Passe dies an, je nachdem, wie deine Ordnerstruktur aussieht
    "./app/components/**/*.{js,jsx,ts,tsx}",  // Passe dies an, je nachdem, wie deine Ordnerstruktur aussieht
    "./app/hooks/components/**/*.{js,jsx,ts,tsx}",  // Passe dies an, je nachdem, wie deine Ordnerstruktur aussieht
  ],
};
