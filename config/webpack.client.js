const path = require('path'); 

module.exports = {
  target: 'web',
  mode: process.env.NODE_ENV ===  'production' ? 'production' : 'development',
  entry: path.resolve(__dirname,  '../src/client.js'),
  output: {
    filename: 'bundle_client.js',
    path: path.resolve(__dirname, '../dist/public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        // test: /\.css$/,
        test: /\.s?[ac]ss$/i,
        use: [
          'isomorphic-style-loader',
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2, // 0 => 无 loader(默认); 1 => postcss-loader; 2 => postcss-loader, sass-loader
              sourceMap: false,
              esModule: false, // css-loader 有关。默认情况下，css-loader 生成使用 ES module语法的 JS module。isomorphic-style-loader 需要一个 CommonJS module语法。
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: [
      //     // 将 JS 字符串生成为 style 节点
      //     'style-loader',
      //     // 将 CSS 转化成 CommonJS 模块
      //     'css-loader',
      //     // 将 Sass 编译成 CSS
      //     'sass-loader',
      //   ],
      // },
    ]
  },
}