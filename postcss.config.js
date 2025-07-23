// postcss.config.js
const isMinify = process.env.MINIFY === 'true';

module.exports = {
  plugins: [
    require('postcss-import'),
    require('autoprefixer'),
    ...(isMinify
      ? [require('cssnano')({ preset: ['default', { discardComments: { removeAll: true } }] })]
      : [])
  ]
};
