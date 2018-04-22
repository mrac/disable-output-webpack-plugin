function DisableOutputPlugin() {}

DisableOutputPlugin.prototype.apply = function(compiler) {
  compiler.hooks.emit.tapAsync('DisableOutputPlugin', (compilation, callback) => {
    Object.keys(compilation.assets).forEach(asset => delete compilation.assets[asset]);
    callback();
  });
};

module.exports = DisableOutputPlugin;

