module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      browsers: [
                        'Chrome >= 52',
                        'FireFox >= 44',
                        'Safari >= 7',
                        'Explorer 11',
                        'last 4 Edge versions',
                      ],
                    },
                    modules: 'cjs',
                    useBuiltIns: false,
                  },
                ],
                '@babel/preset-react',
              ],
              plugins: [
                '@babel/plugin-proposal-object-rest-spread',
                'syntax-async-functions',
                '@babel/plugin-transform-regenerator',
                'flow-react-proptypes',
                '@babel/transform-flow-strip-types',
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-private-methods',
                [
                  'babel-plugin-webpack-alias-7',
                  { config: './webpack.config.base.js' },
                ],
                'css-modules-transform',
                '@babel/plugin-proposal-export-default-from',
                '@babel/plugin-transform-modules-commonjs',
                '@babel/plugin-proposal-optional-chaining',
              ],
            },
          },
        ],
      },
    ],
  },
};
