const prefixSelector = require('postcss-prefix-selector');

const prefix = process.env.PREFIX; // 'anim' or 'grad'
const isMinify = process.env.MINIFY === 'true';

let prefixPlugin = null;
if (prefix === 'anim') {
  prefixPlugin = prefixSelector({
    prefix: '', // We'll handle prefixing in transform
    transform: (unused, selector) => {
      if (selector.startsWith(':root')) return selector;
      // Replace only the first dot in the selector
      return selector.replace(/\.(\w[\w-]*)/g, `.cw__anim-$1`);
    }
  });
} else if (prefix === 'grad') {
  prefixPlugin = prefixSelector({
    prefix: '',
    transform: (unused, selector) => {
      if (selector.startsWith(':root')) return selector;
      return selector.replace(/\.(\w[\w-]*)/g, `.cw__grad-$1`);
    }
  });
}

module.exports = {
  plugins: [
    require('postcss-import'),
    ...(prefixPlugin ? [prefixPlugin] : []),
    require('autoprefixer'),
    ...(isMinify
      ? [require('cssnano')({ preset: ['default', { discardComments: { removeAll: true } }] })]
      : [])
  ]
};