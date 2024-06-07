/* eslint-disable import/no-extraneous-dependencies */
import path, { resolve } from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

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
];

export default {
 entry, output, module, plugins,
};
