module.exports = {
    "globals": {
        "window": false,
        "document": false,
        "Blob": false,
        "Request": false,
        "fetch": false
    },
    "rules": {
        "strict": ["off"],
        "linebreak-style": ["off"],
        "no-var": ["off"],
        "indent": ["error", 4],
        "eol-last": ["off"],
        "comma-dangle": ["error", "never"],
        "import/no-extraneous-dependencies": ["off"],
        "arrow-parens": ["error", "as-needed"],
        "consistent-return": ["off"],
        "no-console": ["off"],
        "no-restricted-syntax": ["error", "WithStatement", "BinaryExpression[operator='in']"],
        "prefer-const": ["off"],
        "no-use-before-define": ["error", { "functions": false }],
        "no-underscore-dangle": ["off"],
        "no-continue": ["off"],
        "no-param-reassign": ["off"],
        "no-plusplus": ["off"],
        "no-await-in-loop": ["off"],
        "no-nested-ternary": ["off"],
        "no-confusing-arrow": ["off"],
        "no-useless-escape": ["off"],
        "import/no-unresolved": ["off"],
        "import/extensions": ["off"],
        "no-throw-literal": ["off"],
        "class-methods-use-this": ["off"],
        "no-prototype-builtins": ["off"],
        "import/no-named-as-default-member": ["off"],
        "import/no-named-as-default": ["off"],
        "guard-for-in": ["off"],
        "func-names": ["off"],
        "unicode-bom": ["off"]
     }
};