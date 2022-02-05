/*
 * @Description:
 * @Version: 2.0
 * @Autor: zhazhayu
 * @Date: 2022-01-03 14:29:58
 * @LastEditors: zhazhayu
 * @LastEditTime: 2022-02-01 17:00:10
 */
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
module.exports = {
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },

  devServer: {
    host: "127.0.0.1",
    port: 8080,
    open: true,
    https: true,
    proxy: {
      api: {
        target: "https://server.angoykeith.xyz",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^api": "",
        },
      },
    },
  },

  productionSourceMap: false
};
