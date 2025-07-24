#[1.0.1] - 2025-07-23

### Added
- Automated build process using PostCSS and npm scripts
- Prefixing: 
  - All selectors from `cw__gradient.css` now use `.cw__grad-` prefix
  - All selectors from `cw__animation.css` now use `.cw__anim-` prefix
- Combined and minified output:
  - `dist/colorwave.css` (combined, unminified)
  - `dist/colorwave.min.css` (combined, minified)
- Cleanup of intermediate build files after build

### Fixed
- Corrected class prefixing logic to avoid double dashes or misplaced prefixes

### Changed
- Updated build scripts in `package.json` for a streamlined workflow


# [1.0.0] - 2025-07-23

### Added
- Initial release of Colorwave CSS library
- Animated gradient backgrounds and utility classes
- `cw__gradient.css` and `cw__animation.css` source files
- Combined and minified output:
  - `dist/colorwave.css` (combined, unminified)
  - `dist/colorwave.min.css` (combined, minified)
- Automated build process using PostCSS and npm scripts
- Prefixing:
  - All selectors from `cw__gradient.css` use `.cw__anim-` prefix
  - All selectors from `cw__animation.css` use `.cw__grad-` prefix

### Tooling
- PostCSS config for prefixing, autoprefixing, and minification
- Build scripts for combining and cleaning up intermediate