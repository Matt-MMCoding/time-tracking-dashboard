// https://nextjs.org/docs/basic-features/eslint

module.exports = {
  extends: ['next', 'next/core-web-vitals', 'airbnb-typescript', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    project: ['tsconfig.json'],
    sourceType: 'module',
  },
  rules: {
    'import/no-anonymous-default-export': 'off',
    'newline-after-var': ['error', 'always'],
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],

    camelcase: 'off',
    'consistent-return': 'error',
    'class-methods-use-this': 'off', // is this needed?
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.stories.tsx',
          '**/*.stories.jsx',
          '**/*.test.tsx',
          '**/*.test.jsx',
          '**/*.jest.setup.js',
          '**/tests.utils.tsx',
        ],
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-duplicates': 'error',
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'no-nested-ternary': 'off',
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-prototype-builtins': 'off',

    'no-use-before-define': 'off',
    'prefer-const': 'error',
    'no-return-assign': 'off',
    'arrow-parens': ['error', 'always'],
    'arrow-body-style': 'off',
    'comma-dangle': 'off',
    curly: ['error', 'all'],
    'sort-imports': 'off',
    'eol-last': 'error',
    'no-continue': 'error',
    'no-else-return': 'error',
    'no-array-constructor': 'error',
    'no-mixed-operators': 'error',
    'no-empty': 'error',
    'prefer-arrow-callback': 'error',
    radix: 'error',
    'require-await': 'error',

    // ---- react specific rules -----------------------
    'react/destructuring-assignment': 'off',
    'react/prop-types': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    // ---- END react specific rules -------------------

    // ---- @typescript-eslint specific rules ----------
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    // ---- END @typescript-eslint rules ----------------
  },
};
