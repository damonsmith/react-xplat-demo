process.env.NODE_ENV = 'development';

const fs = require('fs-extra');
const paths = require('react-scripts-ts/config/paths');
const webpack = require('webpack');
const config = require('react-scripts-ts/config/webpack.config.dev.js');

config.entry = config.entry.filter(
	entry => !entry.includes('webpackHotDevClient')
);

config.output.path = paths.appBuild;
paths.publicUrl = paths.appBuild + '/';

webpack(config).watch({}, (err, stats) => {
  if (err) {
    console.error(err);
  } else {
    copyPublicFolder();
  }
  console.error(stats.toString({
    chunks: false,
    colors: true
  }));
});

function copyPublicFolder() {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: file => file !== paths.appHtml
  });
}