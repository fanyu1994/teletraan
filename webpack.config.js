const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode:"development",
  entry:path.resolve(__dirname,"./src/main.js"),
  output:{
    publicPath:'http://localhost:8080/',//图片绝对路径
    path:path.resolve(__dirname,"./dist"),
    filename:"[name].js"
  },
  devServer:{
    contentBase:path.resolve(__dirname,"dist"),
    hot:true,
    port:"8080",
    open:true,
    historyApiFallback:{
      index:"/"
    }
  },
  module:{
    rules:[
      {
        test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {         
                presets: ['@babel/preset-env'],  
                cacheDirectory: true//缓存
            }
          }
      },
      {
        test:/\.styl(us)?$/,
        use:["style-loader","css-loader","stylus-loader"]
      },
      {
        test:/\.css?$/,
        use:["style-loader","css-loader"]
      },
      // {
      //   test:/\.styl(us)?$/,
      //   use:ExtractTextPlugin.extract({
      //     fallback:"style-loader",
      //     use:["css-loader","stylus-loader"]
      //   })
      // },
      // {
      //   test:/\.css$/,
      //   use:ExtractTextPlugin.extract({
      //     fallback:"style-loader",
      //     use:"css-loader"
      //   })
      // },
      {
        test:/\.vue$/,
        use:"vue-loader"
      },
      {
        test: /\.(ttc|svg|ttf|eot|woff|woff2)$/,
        use: "file-loader"
      },
      {
        test: /\.(jpg|gif|jpeg|png|bmg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin,
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./public/index.html"),
      favicon: path.resolve(__dirname,'./public/favicon.ico') 
    }),
    // new ExtractTextPlugin("css/main.css")
  ]
}