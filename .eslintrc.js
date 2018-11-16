module.exports = {
  "plugins": [ "import", "node" ],
  "extends": [
    "airbnb",
    "eslint:recommended",
  ],
  "parser": "babel-eslint",
  "env": {
    "node": true,
    "jest": true,
    "es6": true
  },
  "rules": {
    "indent": ["error", 2],
    "no-console": "off",
    "no-inline-comments": "off",
    "import/no-extraneous-dependencies": 0,
    "semi": 1
  }
};