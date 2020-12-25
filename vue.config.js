module.exports = {
  devServer: {
    open: true, // 启动服务后是否打开浏览器
    https: false,
    hotOnly: false,
    // 设置代理，用来解决本地开发跨域问题
    proxy: {
      '/laqu': {
        'target': 'https://master.laqu.com',
        pathRewrite: {'^/laqu' : ''},
        secure: false,
        changeOrigin: true,
      }
    },
  },
}