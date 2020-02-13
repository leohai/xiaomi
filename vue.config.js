module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://mall-pre.springboot.cn',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      },
    }
  }
}