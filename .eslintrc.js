module.exports = {
  extends: ['react-app', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'react/prop-types': 'off',
    'no-console': 'error',
    'no-unused-vars': 'error'
  }
}
