module.exports = {
  target: 'node',
  externals: [/^(?!\.|\/).+/i],
  watch: true,
  entry: './index.js',
  output: {
    filename: 'server.js',
    path: './',
    libraryTarget: "commonjs"
  },
  module:{
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          plugins: [
            'transform-decorators-legacy'
          ],
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}