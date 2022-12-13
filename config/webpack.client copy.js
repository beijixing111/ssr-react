const path = require('path'); 
const { webpack } = require('webpack');

module.exports = {
  target: 'web',
  mode: process.env.NODE_ENV ===  'production' ? 'production' : 'development',
  entry: {
    bundle: path.resolve(__dirname,  '../src/client.js'),
    // vendor: ['react', 'react-dom', 'react-router-dom', 'redux', 'react-redux', 'redux-thunk']
  },
  output: {
    filename: '[name]_client.js',
    path: path.resolve(__dirname, '../dist/public')
  },
  plugins: [
    
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          name: 'vendor', // chunk 名称 即打包后所有第三方库都叫vendor
          // 拆分的时候 第三方和功能代码有可能冲突，比如第三方库也作为公共代码在多个地方引用
          // 此时用priority 先按第三方模块进行抽离，未命中在按公共模块抽离
          // priority越大 优先级越大
          priority: 1, // 权限更高，优先抽离，重要！！！
          // 通过test 来检测是否命中 通过检测路径
          test: /node_modules/,
          // 最小分组尺寸 小于此值不抽离 如果有些文件比较小 没有必要抽离
          minSize: 0,  // 大小限制
          // 只要复用超过1次 就抽离
          minChunks: 1  // 最少复用过几次
        },
        // 公共的模块
        common: {
          name: 'common', // chunk 名称
          priority: 0, // 优先级
          minSize: 0,  // 公共模块的大小限制
          // 只要复用超过2次 就抽离
          minChunks: 2  // 公共模块最少复用过几次
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  },
}