module.exports = {
  watch: true,
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: './views/js/dist'
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