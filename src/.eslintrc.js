module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    tsconfigRootDir: './tsconfig.json'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    // Vos règles ESLint ici
  },
  globals: {
    JSX: true
  }
}
