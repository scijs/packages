const React = require('react')

// URL to download the wiki packages list from
exports.wiki = 'https://raw.githubusercontent.com/wiki/scijs/packages/Packages.md'
exports.home = 'http://scijs.net/'

// JSX for logo, to be placed at the top of the sidebar
exports.logo = function () {
  return <h1>scijs</h1>
}
