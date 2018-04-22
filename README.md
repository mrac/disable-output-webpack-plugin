# disable-output-webpack-plugin
Disables saving output files in Webpack

# install

```sh
npm install --save-dev disable-output-webpack-plugin
```

# use

Webpack config:

```javascript
const DisableOutputWebpackPlugin = require('disable-output-webpack-plugin');

module.exports = {
  plugins: [
    new DisableOutputWebpackPlugin()
  ]
}
```
