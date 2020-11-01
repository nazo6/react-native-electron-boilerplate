module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  ecmaFeatures: {
    jsx: true,
  },
  rules: {
    'react/jsx-uses-react': [1],
    'react/jsx-uses-vars': [1],
  },
}
