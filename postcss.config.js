// Tailwind CSS v4 posts itself through @tailwindcss/postcss; autoprefixer is no
// longer needed (v4 handles vendor prefixing via Lightning CSS).
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
