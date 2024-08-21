module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 1s ease-out",
      },
      maxWidth: {
        "7.5xl": "98rem",
      },
      scrollbarHide: {
        "&::-webkit-scrollbar": {
          display: "none",
        },
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
      },

      colors: {
        "dracula-bg": "#FAFAFA",
        "dracula-current-line": "#E0E0E0",
        "dracula-foreground": "#333333",
        "dracula-comment": "#AAAAAA",
        "dracula-cyan": "#555555",
        "dracula-green": "#FF6F61",
        "dracula-orange": "#555555",
        "dracula-pink": "#FF6F61",
        "dracula-purple": "#555555",
        "dracula-red": "#FF6F61",
        "dracula-yellow": "#333333",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-hide": {
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
