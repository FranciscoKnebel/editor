import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import app from './index';
import config from '../../build/app/webpack.dev.config';

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  writeToDisk: true
}));

app.use(webpackHotMiddleware(compiler));

// app.get('*', (req, res, next) => {
//   compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
//     if (err) {
//       return next(err);
//     }
//     res.set('content-type', 'text/html');
//     res.send(result);
//     res.end();
//   });
// });
