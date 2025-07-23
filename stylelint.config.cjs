// stylelint.config.cjs
module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-prettier", // prevent conflicts with Prettier
  ],
  rules: {
    indentation: 2,
    "number-leading-zero": "always",
    "string-quotes": "double",
  },
};
