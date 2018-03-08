const withCss = require('@zeit/next-css')
const isProduction = process.env.NODE_ENV === "production";

module.exports = withCss({
  webpack (config) {
    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          publicPath: './',
          outputPath: 'static/',
          name: '[name].[ext]'
        }
      }
    })

    return config
   },
   exportPathMap: function () { // /Next-React-Components
      return {
         "/": { page: "/" },
         "/content": { page: "/content"},
         "/done": { page: "/done"},
         "/error": { page: "/error"}

      }
   },
   assetPrefix: isProduction ? '/tnhcfs' : ''
})
