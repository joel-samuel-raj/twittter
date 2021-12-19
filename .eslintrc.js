module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'plugin:vue/essential',
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
  ],
  'rules': {
    "vue/valid-template-root": "off",
    "space-before-blocks": "off",
    "quotes": "off",
    "no-extra-semi": "off", 
    "vue/max-attributes-per-line": "off",
    'max-len': ["error", { "code": 120 }],
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        'max-len': 'off' // disables line length check
      }
    }
  ]
};

