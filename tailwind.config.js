module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        "7.5xl": "85rem",
      },
      scrollbarHide: {
        "&::-webkit-scrollbar": {
          display: "none",
        },
        "-ms-overflow-style": "none", // IE and Edge
        "scrollbar-width": "none", // Firefox
      },

      colors: {
        // "dracula-bg": "#282A36",
        // "dracula-current-line": "#44475A",
        // "dracula-foreground": "#F8F8F2",
        // "dracula-comment": "#6272A4",
        // "dracula-cyan": "#8BE9FD",
        // "dracula-green": "#50FA7B",
        // "dracula-orange": "#FFB86C",
        // "dracula-pink": "#FF79C6",
        // "dracula-purple": "#BD93F9",
        // "dracula-red": "#FF5555",
        // "dracula-yellow": "#F1FA8C",

        "dracula-bg": "#FAFAFA", // Off-White (Primary Background)
        "dracula-current-line": "#E0E0E0", // Light Gray (Secondary Background)
        "dracula-foreground": "#333333", // Charcoal Black (Primary Text)
        "dracula-comment": "#AAAAAA", // Soft Gray (Secondary Accent)
        "dracula-cyan": "#555555", // Dark Gray (Accent Color)
        "dracula-green": "#FF6F61", // Coral Red (Button/Highlight)
        "dracula-orange": "#555555", // Using Dark Gray for consistency
        "dracula-pink": "#FF6F61", // Using Coral Red for consistency
        "dracula-purple": "#555555", // Using Dark Gray for consistency
        "dracula-red": "#FF6F61", // Using Coral Red for consistency
        "dracula-yellow": "#333333", // Using Charcoal Black for consistency
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
          "-ms-overflow-style": "none", // IE and Edge
          "scrollbar-width": "none", // Firefox
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
