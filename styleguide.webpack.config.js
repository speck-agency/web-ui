// entry, externals, output, watch, and stats options will be ignored.
// For production builds, devtool will also be ignored.
//
// See: https://react-styleguidist.js.org/docs/webpack.html

// const path = require('path');

module.exports = {
  // alias: {
  //   // Styleguide examples should be copy/pasteable into the project.
  //   '@speck-agency/web-ui': path.resolve(__dirname, 'src/components/'),
  // },
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
