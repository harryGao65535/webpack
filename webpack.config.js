  var path = require('path');

  var HtmlwebpackPlugin =  require('html-webpack-plugin');
//定义文件夹的路径
  var ROOT_PATH = path.resolve(__dirname);
  console.log(ROOT_PATH);

  var APP_PATH = path.resolve(ROOT_PATH,'app');

  var BUILD_PATH = path.resolve(ROOT_PATH,'build');

  module.exports = {
    entry : APP_PATH,
    output : {
      path : BUILD_PATH,
      filename : 'bundle.js'
    },
    plugins : [
      new HtmlwebpackPlugin({title : "hello world"})
    ],
    module :{
      loaders:[{
          test : /\.css$/,
          loaders:['style','css'],
          include : APP_PATH
      }]
    },
    devServer :{
      historyApiFallback : true,
      hot : true,
      inline : true,
      progress : true,
    }
  };
