module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "mocha": true,
  },
  "extends": "eslint:recommended",
  parser: 'babel-eslint',
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module",
    "allowImportExportEverywhere": false
  },
  "plugins": [
    "react",
    "flowtype"
  ],
  "rules": {
    "react/jsx-closing-bracket-location": ["error", "after-props"],
    "react/no-children-prop": "error",
    "react/no-multi-comp": "error",
    "valid-jsdoc": ["warn"],
    "require-jsdoc": ["warn", {
      "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": true,
        "ClassDeclaration": true,
        "ArrowFunctionExpression": true
      }
    }],
    "no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/self-closing-comp": "error",
    "react/require-render-return": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-key": "error",
    "react/react-in-jsx-scope": "error",
    "react/jsx-wrap-multilines": "error",
    "react/jsx-space-before-closing": ["error", "always"],
    "react/jsx-equals-spacing": ["error", "always"],
    "react/jsx-curly-spacing": ["error", "always"],
    "react/prop-types": [1],
    "react/jsx-handler-names": ["error"],
    "react/jsx-pascal-case": [
      "error",
      {
        allowAllCaps: false
      }
    ],
    "react/jsx-indent-props": [
      "error",
      2
    ],
    "react/jsx-indent": [
      "error",
      2
    ],
    "indent": [
      "error",
      2,
      {"SwitchCase": 1}
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single",
      {"allowTemplateLiterals": true}
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-console": process.env.NODE_ENV == 'development' ? "warn" : "error",
    "no-debugger": process.env.NODE_ENV == 'development' ? "warn" : "error"
    // "flowtype/require-valid-file-annotation": [
    //   2,
    //   "always"
    // ]
  },
  "globals": {
    "expect": true,
    "deepFreeze": true,
    "shallow": true,
    "mount": true,
    "sinon": true,
    "render": true,
    "Generator": true
  }
};
