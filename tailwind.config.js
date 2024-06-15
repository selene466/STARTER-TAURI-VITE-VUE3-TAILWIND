/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";

export default {
  content: ["./src/**/*.{html,vue,js}"],

  daisyui: {
    logs: false,
    themes: ["dark", "light"],
  },

  theme: {
    extend: {},
  },

  plugins: [forms, require("daisyui")],
};
