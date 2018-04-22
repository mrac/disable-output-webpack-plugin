function DisableOutputWebpackPlugin() {}

DisableOutputWebpackPlugin.prototype.apply = function(compiler) {
  compiler.hooks.emit.tapAsync('DisableOutputWebpackPlugin', (compilation, callback) => {
    Object.keys(compilation.assets).forEach(asset => delete compilation.assets[asset]);
    callback();
  });
};

module.exports = DisableOutputWebpackPlugin;

