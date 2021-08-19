const path = require('path');
const { addWebpackAlias, override } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    ['@assets']: path.resolve(__dirname, 'src', 'assets'),
    ['@atoms']: path.resolve(__dirname, 'src', 'components/atoms'),
    ['@helpers']: path.resolve(__dirname, 'src', 'helpers'),
    ['@interfaces']: path.resolve(__dirname, 'src', 'interfaces'),
    ['@models']: path.resolve(__dirname, 'src', 'models'),
    ['@molecules']: path.resolve(__dirname, 'src', 'components/molecules'),
    ['@organisms']: path.resolve(__dirname, 'src', 'components/organisms'),
    ['@redux']: path.resolve(__dirname, 'src', 'redux'),
    ['@routes']: path.resolve(__dirname, 'src', 'routes'),
    ['@services']: path.resolve(__dirname, 'src', 'services'),
    ['@templates']: path.resolve(__dirname, 'src', 'templates'),
    ['@theme']: path.resolve(__dirname, 'src', 'theme'),
    ['@utils']: path.resolve(__dirname, 'src', 'utils'),
    ['@views']: path.resolve(__dirname, 'src', 'views')
  })
);