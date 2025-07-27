// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    // هنا تحدد الثيمات التي تريدها.
    // يجب أن تكون "light" و "dark" و "cupcake" وما إلى ذلك موجودة هنا.
    themes: [
      "light",
      "dark",
      "cupcake",
      "synthwave",
      "forest",
      "night",
      "luxury", // مثال لثيم إضافي
      {
        // يمكنك إضافة ثيم مخصص خاص بك هنا
        "myCustomTheme": {
          "primary": "#a991f7",
          "secondary": "#f6d860",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
};
