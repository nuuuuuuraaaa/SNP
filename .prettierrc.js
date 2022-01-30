module.exports = {
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  trailingComma: 'none',
  // endOfLine: "auto",
  overrides: [
    {
      files: '*.hbs',
      options: {
        singleQuote: false,
      },
    },
  ],
};
