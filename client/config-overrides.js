const path = require('path');
const { addWebpackAlias, override } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    ['@assets']: path.resolve(__dirname, 'src', 'assets'),
    ['@atoms']: path.resolve(__dirname, 'src', 'components/atoms'),
    ['@molecules']: path.resolve(__dirname, 'src', 'components/molecules'),
    ['@organisms']: path.resolve(__dirname, 'src', 'components/organisms'),
    ['@routes']: path.resolve(__dirname, 'src', 'routes'),
    ['@templates']: path.resolve(__dirname, 'src', 'templates'),
    ['@theme']: path.resolve(__dirname, 'src', 'theme'),
    ['@utils']: path.resolve(__dirname, 'src', 'utils'),
    ['@views']: path.resolve(__dirname, 'src', 'views'),
  })
);