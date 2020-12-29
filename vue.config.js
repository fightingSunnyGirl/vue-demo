module.exports = {
  chainWebpack: config => { // 用来告诉浏览器在页面加载完成后，利用空闲时间提前获取用户未来可能会访问的内容
    // 移除 prefetch 插件
    // config.plugins.delete('prefetch')
    // 或者
    // 修改它的选项：
    config.plugin('prefetch').tap(options => {
      options[0].fileBlacklist = options[0].fileBlacklist || []
      options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/)
      return options
    })
  },
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