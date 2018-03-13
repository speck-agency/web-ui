// entry, externals, output, watch, and stats options will be ignored.
// For production builds, devtool will also be ignored.
//
// See: https://react-styleguidist.js.org/docs/webpack.html

module.exports = {
  module: {
    loaders: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {
                targets: {
                  browsers: ['last 2 versions', 'Explorer >= 9'],
                },
              }],
              'react',
            ],
            plugins: [
              'transform-object-rest-spread',
              'transform-class-properties',
            ],
          },
        },
      },
    ],
  },
};
