module.exports =  {
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends:  [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
  },
  "rules": {
    "@typescript-eslint/indent": ["error", 2, {
        "SwitchCase": 1,
        "CallExpression": {"arguments": "first"},
        "FunctionExpression": {"parameters": "first"},
        "FunctionDeclaration": {"parameters": "first"}
    }],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-object-literal-type-assertion": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/member-delimiter-style": [
        "error",
        {
            "singleline": {
                "delimiter": "semi",
                "requireLast": true
            }
        }
    ]
  }
};