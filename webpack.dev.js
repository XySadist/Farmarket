import { merge } from 'webpack-merge';
import path, { resolve } from 'path';
import { fileURLToPath } from 'url';
import common from './webpack.common.js';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

export default merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: resolve(__dirname, 'dist'),
    open: true,
    compress: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
});
