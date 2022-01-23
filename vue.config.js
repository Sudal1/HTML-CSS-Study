const path = require('path')

module.exports = {
  devServer: {
    hot: true,
    proxy: {
      '/app': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    },
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
}