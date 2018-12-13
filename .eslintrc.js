module.exports = {
  "extends": "plugin:vue/recommended",
  "plugins": [
    "vue",
    "html"
  ],
  "parserOptions": {
    "parser": "babel-eslint",
    "sourceType": "module"
  },
  "rules": {
    "no-new": "off" //可不可以new 新的对象
  }
};