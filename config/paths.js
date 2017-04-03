'use strict';

var path = require('path');
var fs = require('fs');
var config = require('./hero-config.json');
var ensureSlash = require('../lib/ensureSlash');
var appDirectory = fs.realpathSync(process.cwd());

function resolveApp(relativePath) {
    return path.resolve(appDirectory, relativePath);
}

module.exports = {
    appBuild: resolveApp(config.outDir),
    appIndexJs: resolveApp(ensureSlash(config.sourceFolder) + 'index.js'),
    appPackageJson: resolveApp('package.json'),
    appSrc: resolveApp(config.sourceFolder),
    heroCliConfig: resolveApp(config.heroCliConfig),
    appNodeModules: resolveApp('node_modules')
};
