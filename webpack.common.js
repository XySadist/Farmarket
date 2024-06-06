import path, { resolve } from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { GenerateSW } from 'workbox-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

export const entry = {
  app: resolve(__dirname, 'src/scripts/index.js'),
};
export const output = {
  filename: '[name].bundle.js',
  path: resolve(__dirname, 'dist'),
  clean: true,
};
export const module = {
  rules: [
    {
      test: /\.css$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
      ],
    },
  ],
};
export const optimization = {
  splitChunks: {
    chunks: 'all',
    minSize: 20000,
    maxSize: 70000,
    minChunks: 1,
    maxAsyncRequests: 30,
    maxInitialRequests: 30,
    automaticNameDelimiter: '~',
    enforceSizeThreshold: 50000,
    cacheGroups: {
      defaultVendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10,
      },
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true,
      },
    },
  },
};
export const plugins = [
  new CleanWebpackPlugin(),

  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: resolve(__dirname, 'src/templates/index.html'),
  }),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: resolve(__dirname, 'src/public/'),
        to: resolve(__dirname, 'dist/'),
      },
    ],
  }),
  new GenerateSW({
    swDest: './sw.bundle.js',
    // runtimeCaching: [
    //   {
    //     urlPattern: ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/'),
    //     handler: 'StaleWhileRevalidate',
    //     options: {
    //       cacheName: 'restaurant-api',
    //     },
    //   },
    //   {
    //     urlPattern: ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/medium/'),
    //     handler: 'StaleWhileRevalidate',
    //     options: {
    //       cacheName: 'restaurant-image-api',
    //     },
    //   },
    // ],
  }),
  new BundleAnalyzerPlugin(),
];

export default {
 entry, output, module, optimization, plugins,
};
