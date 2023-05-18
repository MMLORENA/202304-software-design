module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  extends: ['xo'],
  overrides: [
    {
      extends: ['xo-typescript'],
      files: ['*.ts'],
      rules: {
        'no-unused-vars': ['error'],
        '@typescript-eslint/consistent-type-definitions': [
          'error',
          'interface',
        ],
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'no-implicit-coercion': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['**/dist/**/*.js'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    indent: ['Error', 2],
    'object-curly-spacing': ['Error', 'always'],
    'operator-linebreak': ['error', 'after'],
  },
};
