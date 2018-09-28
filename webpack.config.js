const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const DEV_SERVER_PORT = 3000;
const PUBLIC_FOLDER = 'public';

const config = {
  mode: 'development',
  stats: {
    maxModules: 0,
  },

  // Set the detail of source-mapping used for debugging. Regular 'source-map' is the most
  // expensive. 'cheap-module-source-map' gives better performance, but less details.
  devtool: 'source-map',

  // Set the base folder of the source files for building.
  context: resolve(__dirname, 'src'),

  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${DEV_SERVER_PORT}`,
    'webpack/hot/dev-server',
    './index.js',
  ],

  // Set the output config with target folder for static files that
  // are built. No need for hashing in develop, although Chrome is eager to cache.
  output: {
    pathinfo: true,
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: '/',
  },

  // Enable hot reloading as well as enabling serving index.html for 404 responses.
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, PUBLIC_FOLDER),
    historyApiFallback: true,
    port: DEV_SERVER_PORT,
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // Enable webpack to continue building with linting warnings.
          // Syntax errors in the code will of course still break the build.
          emitWarning: true,
        },
      },
      {
        test: /\.jsx?$/,
        loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              // Enable CSS Modules.
              modules: true,
              // Define how css module class names are renamed with added hash
              // in order to secure scope containment.
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              // Set a unique identifier (ident) to ensure that this options JSON
              // can be stringified.
              // See https://github.com/facebookincubator/create-react-app/issues/2677
              ident: 'postcss',
              plugins: () => [
                autoprefixer({
                  // Target browsers with above 5% usage, last 4 versions,
                  // Firefox Extended Support Release (often used in government, schools etc).
                  // Don't support IE 10 or older.
                  browsers: [
                    '>5%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 11',
                  ],
                  // Do not support the depricated 2009 specs of Flexbox.
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'image/png',
              name: 'images/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
      // url-loader will base64 encode files smaller than the set limit
      // and embed directly into the build js. This is to avoid chatty
      // http requests that may reduce performance and.
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'application/font-woff',
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'application/octet-stream',
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'image/svg+xml',
              name: 'images/[name].[ext]',
            },
          },
        ],
      },
    ],
  },

  // NamedModulesPlugin will cause the relative path of the module to be shown when HMR is enabled
  // ModuleConcatenationPlugin will concat modules rather than puttin them in separate closures.
  // OpenBrowserPlugin will open the browser on 'yarn start'.
  // HotModuleReplacementPlugin replaces changed modules only, keeping the rest of state intact.
  // HTMLWebpackPlugin injects all bundles and additional scripts into the template index.html.

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({
      // TODO: Do we need this?
      test: /\.jsx?$/,
      options: {
        eslint: {
          configFile: resolve(__dirname, '.eslintrc'),
          cache: false,
        },
      },
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ExtractTextPlugin({ filename: './styles/style.css', disable: false, allChunks: true }),
    new OpenBrowserPlugin({ url: `http://localhost:${DEV_SERVER_PORT}` }),
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      inject: true,
      template: resolve(__dirname, `${PUBLIC_FOLDER}/index.html`),
    }),
  ],
};

module.exports = config;
