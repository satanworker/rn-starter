module.exports = {
  "extends": [
    "plugin:flowtype/recommended",
    "airbnb"
  ],
  "parser": "babel-eslint",
  "plugins": ["react-native", "flowtype"],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".ios.js", ".android.js"]
      }
    }
  },
  "rules": {
    "no-console": 0,
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,  
    // `.jsx` extension cannot be used with React Native
    // https://github.com/airbnb/javascript/issues/982
    "react/jsx-filename-extension": ["error", {
      "extensions": [".js", ".jsx"]
    }],
  }
};
