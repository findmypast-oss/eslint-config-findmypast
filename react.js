module.exports = {
  extends: ['plugin:react/recommended', 'prettier/react'],
  plugins: ['react'],
  rules: {
    'react/no-danger': 2,
    'react/prop-types': 0,
    'react/jsx-no-bind': 2,
    'react/prefer-stateless-function': 2,
    'react/jsx-no-target-blank': 2
  }
};
