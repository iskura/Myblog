const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = {
  configureWebpack:{
        plugins: [
            Components({
            resolvers: [ElementPlusResolver()],
            }),
        ], 
  },

  // chainWebpack: config => {
  //   config.module.rule('md')
  //     .test(/\.md/)
  //     .use('vue-loader')
  //     .loader('vue-loader')
  //     .end()
  //     .use('vue-markdown-loader')
  //     .loader('vue-markdown-loader/lib/markdown-compiler')
  //     .options({
  //       raw: true
  //     })
  // }
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    open:true,
    https:true,
    proxy: {
      'api':{
        target:'https://server.angoykeith.xyz',
        ws:true,
        changeOrigin:true,
        pathRewrite:{
          '^api':''
        }
      }
    }
  },

  productionSourceMap: false,

  css: {
    sourceMap: true
  }
}