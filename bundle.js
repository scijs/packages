(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=[{"name":"mikolalysenko","img":"https://avatars.githubusercontent.com/u/231686?v=3"},{"name":"shama","img":"https://avatars.githubusercontent.com/u/99604?v=3"},{"name":"jaspervdg","img":"https://avatars.githubusercontent.com/u/3264193?v=3"},{"name":"rreusser","img":"https://avatars.githubusercontent.com/u/572717?v=3"},{"name":"kcarnold","img":"https://avatars.githubusercontent.com/u/21072?v=3"},{"name":"Planeshifter","img":"https://avatars.githubusercontent.com/u/1913638?v=3"},{"name":"substack","img":"https://avatars.githubusercontent.com/u/12631?v=3"},{"name":"jalava","img":"https://avatars.githubusercontent.com/u/467143?v=3"},{"name":"chrisdickinson","img":"https://avatars.githubusercontent.com/u/37303?v=3"},{"name":"twolfson","img":"https://avatars.githubusercontent.com/u/902488?v=3"},{"name":"59naga","img":"https://avatars.githubusercontent.com/u/1548478?v=3"},{"name":"breedx2","img":"https://avatars.githubusercontent.com/u/1888255?v=3"},{"name":"lchenay","img":"https://avatars.githubusercontent.com/u/804687?v=3"},{"name":"Barryrowe","img":"https://avatars.githubusercontent.com/u/1013426?v=3"},{"name":"arthurvr","img":"https://avatars.githubusercontent.com/u/6025224?v=3"},{"name":"deathcap","img":"https://avatars.githubusercontent.com/u/5897956?v=3"},{"name":"antimatter15","img":"https://avatars.githubusercontent.com/u/30054?v=3"}]
},{}],2:[function(require,module,exports){
module.exports={"content":"<h1 id=\"packages\">packages</h1>\n<p>A directory of packages in the <a href=\"http://scijs.net\">scijs ecosystem</a>.</p>\n<h2 id=\"contributing\">Contributing</h2>\n<p>Add your repository to the\n<a href=\"https://github.com/scijs/packages/wiki/Packages\">wiki list</a>, and it&apos;ll\nbe included next time the packages site is built. Soon, this will be automatic.</p>\n<p>Note that each category is marked up with a heading, and each list item\nis mapped to a package&apos;s username/reponame on GitHub. Don&apos;t hesitate to submit\na bunch of packages at once: the more the merrier!</p>\n<h3 id=\"inline-examples\">Inline Examples</h3>\n<p>If your repository has an <code>index.html</code> file hosted on its <code>gh-pages</code> branch,\nan iframe will be automatically inserted into the <code>README.md</code> file to display\nalongisde the documentation.</p>\n<p>If you&apos;d like to use a different URL, or more than one iframe, simply place an\nHTML comment in your <code>README.md</code> file similar to the following:</p>\n<pre><code class=\"lang-html\"><span class=\"c\">&lt;!-- iframe: http://my-neat-demo.com --&gt;</span>\n</code></pre>\n<p>When the site updates, an iframe will be used in its place.</p>\n<h2 id=\"development\">Development</h2>\n<p>To get the site running locally:</p>\n<pre><code class=\"lang-bash\">git clone git@github.com:scijs/packages.git\n<span class=\"nb\">cd </span>packages\nnpm install\nnpm start\n</code></pre>\n<p>To update the package data:</p>\n<pre><code class=\"lang-bash\">npm run build\n</code></pre>\n"}
},{}],3:[function(require,module,exports){
module.exports={"ndarrays":[{"user":"scijs","name":"ndarray","repo":"http://github.com/scijs/ndarray","uri":null,"contrib":[0]},{"user":"scijs","name":"cwise","repo":"http://github.com/scijs/cwise","uri":null,"contrib":[0,2]},{"user":"scijs","name":"ndarray-scratch","repo":"http://github.com/scijs/ndarray-scratch","uri":null,"contrib":[0]},{"user":"scijs","name":"ndarray-fill","repo":"http://github.com/scijs/ndarray-fill","uri":null,"contrib":[0,1]},{"user":"scijs","name":"ndarray-pack","repo":"http://github.com/scijs/ndarray-pack","uri":null,"contrib":[0,4]},{"user":"scijs","name":"ndarray-unpack","repo":"http://github.com/scijs/ndarray-unpack","uri":null,"contrib":[0]},{"user":"scijs","name":"ndarray-ops","repo":"http://github.com/scijs/ndarray-ops","uri":null,"contrib":[0,1]},{"user":"scijs","name":"ndarray-complex","repo":"http://github.com/scijs/ndarray-complex","uri":null,"contrib":[0,3]},{"user":"scijs","name":"ndarray-proxy","repo":"http://github.com/scijs/ndarray-proxy","uri":null,"contrib":[0,1]},{"user":"scijs","name":"ndarray-pack","repo":"http://github.com/scijs/ndarray-pack","uri":null,"contrib":[0,4]},{"user":"scijs","name":"ndarray-bit","repo":"http://github.com/scijs/ndarray-bit","uri":null,"contrib":[0]}],"Linear algebra":[{"user":"scijs","name":"ndarray-blas-level1","repo":"http://github.com/scijs/ndarray-blas-level1","uri":null,"contrib":[3,5]},{"user":"scijs","name":"ndarray-blas-level2","repo":"http://github.com/scijs/ndarray-blas-level2","uri":null,"contrib":[3]},{"user":"scijs","name":"ndarray-linear-solve","repo":"http://github.com/scijs/ndarray-linear-solve","uri":null,"contrib":[6,0]},{"user":"scijs","name":"ndarray-blas-dger","repo":"http://github.com/scijs/ndarray-blas-dger","uri":null,"contrib":[3,7]},{"user":"scijs","name":"ndarray-householder-qr","repo":"http://github.com/scijs/ndarray-householder-qr","uri":null,"contrib":[3]},{"user":"scijs","name":"ndarray-householder-qr-complex","repo":"http://github.com/scijs/ndarray-householder-qr-complex","uri":null,"contrib":[3]},{"user":"scijs","name":"ndarray-gram-schmidt-qr","repo":"http://github.com/scijs/ndarray-gram-schmidt-qr","uri":null,"contrib":[3]},{"user":"scijs","name":"ndarray-gram-schmidt-qr-complex","repo":"http://github.com/scijs/ndarray-gram-schmidt-qr-complex","uri":null,"contrib":[3]},{"user":"scijs","name":"ndarray-blas-gemm-complex","repo":"http://github.com/scijs/ndarray-blas-gemm-complex","uri":null,"contrib":[3]},{"user":"scijs","name":"ndarray-blas-trsv-complex","repo":"http://github.com/scijs/ndarray-blas-trsv-complex","uri":null,"contrib":[3]},{"user":"scijs","name":"ndarray-blas-trsv","repo":"http://github.com/scijs/ndarray-blas-trsv","uri":null,"contrib":[3]},{"user":"scijs","name":"ndarray-lup-solve","repo":"http://github.com/scijs/ndarray-lup-solve","uri":null,"contrib":[3]},{"user":"scijs","name":"ndarray-lup-factorization","repo":"http://github.com/scijs/ndarray-lup-factorization","uri":null,"contrib":[3]},{"user":"scijs","name":"ndarray-blas-gemv","repo":"http://github.com/scijs/ndarray-blas-gemv","uri":null,"contrib":[3]},{"user":"scijs","name":"ndarray-vandermonde","repo":"http://github.com/scijs/ndarray-vandermonde","uri":null,"contrib":[3]},{"user":"scijs","name":"ndarray-ldl-factorization","repo":"http://github.com/scijs/ndarray-ldl-factorization","uri":null,"contrib":[5]},{"user":"scijs","name":"ndarray-blas-level2-complex","repo":"http://github.com/scijs/ndarray-blas-level2-complex","uri":null,"contrib":[3]},{"user":"scijs","name":"ndarray-blas-level1-complex","repo":"http://github.com/scijs/ndarray-blas-level1-complex","uri":null,"contrib":[3]},{"user":"scijs","name":"ndarray-cholesky-factorization","repo":"http://github.com/scijs/ndarray-cholesky-factorization","uri":null,"contrib":[5]},{"user":"scijs","name":"ndarray-determinant","repo":"http://github.com/scijs/ndarray-determinant","uri":null,"contrib":[0]},{"user":"scijs","name":"ndarray-trace","repo":"http://github.com/scijs/ndarray-trace","uri":null,"contrib":[0]},{"user":"scijs","name":"ndarray-diagonal","repo":"http://github.com/scijs/ndarray-diagonal","uri":null,"contrib":[0]},{"user":"scijs","name":"ndarray-crout-decomposition","repo":"http://github.com/scijs/ndarray-crout-decomposition","uri":null,"contrib":[6,0]},{"user":"scijs","name":"ndarray-distance","repo":"http://github.com/scijs/ndarray-distance","uri":null,"contrib":[0]},{"user":"scijs","name":"ndgemm","repo":"http://github.com/scijs/ndgemm","uri":null,"contrib":[0]}],"Sorting and searching":[{"user":"scijs","name":"ndarray-sort","repo":"http://github.com/scijs/ndarray-sort","uri":null,"contrib":[0,8]},{"user":"scijs","name":"ndarray-select","repo":"http://github.com/scijs/ndarray-select","uri":null,"contrib":[0]}],"Signal processing":[{"user":"scijs","name":"ndarray-normalize","repo":"http://github.com/scijs/ndarray-normalize","uri":null,"contrib":[0]},{"user":"scijs","name":"ndarray-fft","repo":"http://github.com/scijs/ndarray-fft","uri":null,"contrib":[0]},{"user":"scijs","name":"window-functions","repo":"http://github.com/scijs/window-functions","uri":null,"contrib":[3]},{"user":"scijs","name":"dirichlet","repo":"http://github.com/scijs/dirichlet","uri":null,"contrib":[0]},{"user":"scijs","name":"pyramids","repo":"http://github.com/scijs/pyramids","uri":null,"contrib":[2]},{"user":"scijs","name":"ndarray-convolve","repo":"http://github.com/scijs/ndarray-convolve","uri":null,"contrib":[0,2]},{"user":"scijs","name":"ndarray-gaussian-filter","repo":"http://github.com/scijs/ndarray-gaussian-filter","uri":null,"contrib":[0]},{"user":"scijs","name":"phase-align","repo":"http://github.com/scijs/phase-align","uri":null,"contrib":[0]}],"Images and voxels":[{"user":"scijs","name":"get-pixels","repo":"http://github.com/scijs/get-pixels","uri":null,"contrib":[0,10,9,11,1,12,13,14]},{"user":"scijs","name":"save-pixels","repo":"http://github.com/scijs/save-pixels","uri":null,"contrib":[0,9,1]},{"user":"mikolalysenko","name":"surface-nets","repo":"http://github.com/mikolalysenko/surface-nets","uri":null,"contrib":[0]},{"user":"mikolalysenko","name":"voxelize","repo":"http://github.com/mikolalysenko/voxelize","uri":null,"contrib":[0]},{"user":"scijs","name":"distance-transform","repo":"http://github.com/scijs/distance-transform","uri":null,"contrib":[0]},{"user":"scijs","name":"luminance","repo":"http://github.com/scijs/luminance","uri":null,"contrib":[0]},{"user":"scijs","name":"ndarray-log-polar","repo":"http://github.com/scijs/ndarray-log-polar","uri":null,"contrib":[0]},{"user":"scijs","name":"ndarray-homography","repo":"http://github.com/scijs/ndarray-homography","uri":null,"contrib":[0,15]},{"user":"scijs","name":"image-rotate","repo":"http://github.com/scijs/image-rotate","uri":null,"contrib":[0]},{"user":"scijs","name":"ndarray-warp","repo":"http://github.com/scijs/ndarray-warp","uri":null,"contrib":[0]},{"user":"scijs","name":"ndarray-translate","repo":"http://github.com/scijs/ndarray-translate","uri":null,"contrib":[0]},{"user":"scijs","name":"ndarray-translate-fft","repo":"http://github.com/scijs/ndarray-translate-fft","uri":null,"contrib":[0]},{"user":"scijs","name":"ndarray-linear-interpolate","repo":"http://github.com/scijs/ndarray-linear-interpolate","uri":null,"contrib":[0]},{"user":"scijs","name":"nrrd-js","repo":"http://github.com/scijs/nrrd-js","uri":null,"contrib":[2]},{"user":"scijs","name":"ndarray-to-binvox","repo":"http://github.com/scijs/ndarray-to-binvox","uri":null,"contrib":[0]}],"Calculus":[{"user":"scijs","name":"deriv","repo":"http://github.com/scijs/deriv","uri":null,"contrib":[5,14]},{"user":"scijs","name":"ndarray-prefix-sum","repo":"http://github.com/scijs/ndarray-prefix-sum","uri":null,"contrib":[0]},{"user":"scijs","name":"gauss-quadrature","repo":"http://github.com/scijs/gauss-quadrature","uri":null,"contrib":[0,3]},{"user":"scijs","name":"ndarray-gradient","repo":"http://github.com/scijs/ndarray-gradient","uri":null,"contrib":[0]}],"Polynomials":[{"user":"scijs","name":"horner","repo":"http://github.com/scijs/horner","uri":null,"contrib":[0,2]},{"user":"scijs","name":"poly-mult","repo":"http://github.com/scijs/poly-mult","uri":null,"contrib":[0,2]},{"user":"scijs","name":"poly-mult-fft","repo":"http://github.com/scijs/poly-mult-fft","uri":null,"contrib":[0]},{"user":"scijs","name":"poly-derivative","repo":"http://github.com/scijs/poly-derivative","uri":null,"contrib":[0,2]},{"user":"scijs","name":"legendre-poly","repo":"http://github.com/scijs/legendre-poly","uri":null,"contrib":[0,2]},{"user":"scijs","name":"durand-kerner","repo":"http://github.com/scijs/durand-kerner","uri":null,"contrib":[0,2]},{"user":"scijs","name":"poly-roots","repo":"http://github.com/scijs/poly-roots","uri":null,"contrib":[3]},{"user":"scijs","name":"companion-roots","repo":"http://github.com/scijs/companion-roots","uri":null,"contrib":[0]},{"user":"scijs","name":"quadratic-roots","repo":"http://github.com/scijs/quadratic-roots","uri":null,"contrib":[3]},{"user":"scijs","name":"splines","repo":"http://github.com/scijs/splines","uri":null,"contrib":[2]}],"Tensor analysis":[{"user":"scijs","name":"tensor-decomposition","repo":"http://github.com/scijs/tensor-decomposition","uri":null,"contrib":[2]}],"Combinatorics":[{"user":"scijs","name":"permutation-rank","repo":"http://github.com/scijs/permutation-rank","uri":null,"contrib":[0]},{"user":"scijs","name":"permutation-parity","repo":"http://github.com/scijs/permutation-parity","uri":null,"contrib":[0]},{"user":"scijs","name":"invert-permutation","repo":"http://github.com/scijs/invert-permutation","uri":null,"contrib":[0]},{"user":"scijs","name":"random-permutation","repo":"http://github.com/scijs/random-permutation","uri":null,"contrib":[0]},{"user":"scijs","name":"multinomial","repo":"http://github.com/scijs/multinomial","uri":null,"contrib":[0,2]}],"Statistics":[{"user":"scijs","name":"ndarray-moments","repo":"http://github.com/scijs/ndarray-moments","uri":null,"contrib":[0]},{"user":"scijs","name":"gauss-random","repo":"http://github.com/scijs/gauss-random","uri":null,"contrib":[0]},{"user":"scijs","name":"sphere-random","repo":"http://github.com/scijs/sphere-random","uri":null,"contrib":[0]}],"Miscellaneous functions":[{"user":"scijs","name":"dirichlet","repo":"http://github.com/scijs/dirichlet","uri":null,"contrib":[0]},{"user":"scijs","name":"complex-division","repo":"http://github.com/scijs/complex-division","uri":null,"contrib":[3]},{"user":"scijs","name":"complex-sqrt","repo":"http://github.com/scijs/complex-sqrt","uri":null,"contrib":[3]},{"user":"scijs","name":"complex-modulus","repo":"http://github.com/scijs/complex-modulus","uri":null,"contrib":[3]},{"user":"scijs","name":"almost-equal","repo":"http://github.com/scijs/almost-equal","uri":null,"contrib":[0]},{"user":"scijs","name":"nextafter","repo":"http://github.com/scijs/nextafter","uri":null,"contrib":[0]},{"user":"scijs","name":"signum","repo":"http://github.com/scijs/signum","uri":null,"contrib":[0]}],"Debugging":[{"user":"scijs","name":"ndarray-show","repo":"http://github.com/scijs/ndarray-show","uri":null,"contrib":[6,3]},{"user":"scijs","name":"ndarray-imshow","repo":"http://github.com/scijs/ndarray-imshow","uri":null,"contrib":[0,16]}],"Test data":[{"user":"scijs","name":"baboon-image","repo":"http://github.com/scijs/baboon-image","uri":null,"contrib":[0]}]}
},{}],4:[function(require,module,exports){
require('insert-css')(require('stackgl-readme-css'))

var findup    = require('findup-element')
var minstache = require('minstache')
var xhr       = require('xhr')


var template = minstache.compile("<a href=\"http://scijs.net\" target=\"_blank\">\n  <h1>scijs</h1>\n</a>\n<div>\n  {{#categories}}\n    <h2>{{name}}</h2>\n    <ul>\n      {{#repos}}\n        <li data-user=\"{{user}}\"\n            data-name=\"{{name}}\"\n        >{{name}}</li>\n      {{/repos}}\n    </ul>\n  {{/categories}}\n</div>\n")
var contemp  = minstache.compile("<ul>\n  {{#contributors}}\n    <a href=\"http://github.com/{{name}}\">\n      <li><img src=\"{{img}}\" title=\"github.com/{{name}}\"></li>\n    </a>\n  {{/contributors}}\n</ul>\n")
var authors  = require('./build/contributors.json')
var main     = require('./build/main.json').content
var repos    = require('./build/repos.json')

var readme = document.getElementById('package-readme')
var list   = document.getElementById('package-list')
var title  = list.querySelector('h1')

var repoIndex  = {}
var categories = Object.keys(repos).map(function(k) {
  return { name: k, repos: repos[k] }
})

categories.forEach(function(category) {
  category.repos.forEach(function(repo) {
    repoIndex[repo.user] = repoIndex[repo.user] || {}
    repoIndex[repo.user][repo.name] = repo
    repo.contrib = repo.contrib.map(function(d) {
      return authors[d]
    })
  })
})

updateBody()
window.addEventListener('hashchange', updateBody, false)

list.innerHTML = template({ categories: categories })
list.addEventListener('click', function(e) {
  var el = findup(e.target, function(el) {
    return el.hasAttribute('data-user')
  })

  if (!el) return

  var user = el.getAttribute('data-user')
  var name = el.getAttribute('data-name')

  window.location = '#' + [user, name].join('/')

  e.preventDefault()
  e.stopPropagation()
  return false
}, false)

function updateBody() {
  var location = String(window.location.hash).replace('#', '')
  if (!location) return readme.innerHTML = main

  var arr = location.split('/')
  var user = arr[0]
  var name = arr[1]
  var uri = ['build', user, name].join('/') + '.html'
  var repo = repoIndex[user][name]

  xhr({ uri: uri }, function(err, res, body) {
    if (err) throw err

    [user, name].join('/')

    window.scrollTo(0, 0)
    readme.innerHTML = body
    addContributors(readme, repo.contrib)
  })
}

function addContributors(readme, contributors) {
  var h1 = readme.querySelector('h1, h2, h3, h4, h5, h6')
  h1.innerHTML = '<span class="title-inner">' + h1.innerHTML + '</span>'

  var credits = h1.appendChild(document.createElement('div'))

  credits.setAttribute('class', 'credits')
  contributors.sort(function(a, b) {
    return Math.random() - 0.5
  })

  contributors = contributors.slice(0, 20)
  contributors.forEach(function(contrib) {
    var uri = 'https://github.com/' + contrib.name
    var a   = document.createElement('a')

    a.setAttribute('style', 'background-image:url('+contrib.img+')')
    a.setAttribute('class', 'credit-image')
    a.setAttribute('target', '_blank')
    a.setAttribute('title', contrib.name)
    a.setAttribute('href', uri)

    credits.appendChild(a)
  })
}

},{"./build/contributors.json":1,"./build/main.json":2,"./build/repos.json":3,"findup-element":5,"insert-css":6,"minstache":7,"stackgl-readme-css":8,"xhr":9}],5:[function(require,module,exports){
module.exports = findup

function findup(child, check) {
  if (typeof check === 'string')   check = byName(check)
  if (typeof check !== 'function') check = byExact(check)

  while (
    child &&
   !check(child)
  ) child = child.parentNode


  return child || null
}

function byName(name) {
  name = String(name).toUpperCase()

  return function(element) {
    return name === element.nodeName
  }
}

function byExact(el) {
  return function(element) {
    return el === element
  }
}

},{}],6:[function(require,module,exports){
var inserted = {};

module.exports = function (css, options) {
    if (inserted[css]) return;
    inserted[css] = true;
    
    var elem = document.createElement('style');
    elem.setAttribute('type', 'text/css');

    if ('textContent' in elem) {
      elem.textContent = css;
    } else {
      elem.styleSheet.cssText = css;
    }
    
    var head = document.getElementsByTagName('head')[0];
    if (options && options.prepend) {
        head.insertBefore(elem, head.childNodes[0]);
    } else {
        head.appendChild(elem);
    }
};

},{}],7:[function(require,module,exports){

/**
 * Expose `render()`.`
 */

exports = module.exports = render;

/**
 * Expose `compile()`.
 */

exports.compile = compile;

/**
 * Render the given mustache `str` with `obj`.
 *
 * @param {String} str
 * @param {Object} obj
 * @return {String}
 * @api public
 */

function render(str, obj) {
  obj = obj || {};
  var fn = compile(str);
  return fn(obj);
}

/**
 * Compile the given `str` to a `Function`.
 *
 * @param {String} str
 * @return {Function}
 * @api public
 */

function compile(str) {
  var js = [];
  var toks = parse(str);
  var tok;

  for (var i = 0; i < toks.length; ++i) {
    tok = toks[i];
    if (i % 2 == 0) {
      js.push('"' + tok.replace(/"/g, '\\"') + '"');
    } else {
      switch (tok[0]) {
        case '/':
          tok = tok.slice(1);
          js.push(' }) + ');
          break;
        case '^':
          tok = tok.slice(1);
          assertProperty(tok);
          js.push(' + section(obj, "' + tok + '", true, function(obj){ return ');
          break;
        case '#':
          tok = tok.slice(1);
          assertProperty(tok);
          js.push(' + section(obj, "' + tok + '", false, function(obj){ return ');
          break;
        case '!':
          tok = tok.slice(1);
          assertProperty(tok);
          js.push(' + obj.' + tok + ' + ');
          break;
        default:
          assertProperty(tok);
          js.push(' + escape(obj.' + tok + ') + ');
      }
    }
  }

  js = '\n'
    + indent(escape.toString()) + ';\n\n'
    + indent(section.toString()) + ';\n\n'
    + '  return ' + js.join('').replace(/\n/g, '\\n');

  return new Function('obj', js);
}

/**
 * Assert that `prop` is a valid property.
 *
 * @param {String} prop
 * @api private
 */

function assertProperty(prop) {
  if (!prop.match(/^[\w.]+$/)) throw new Error('invalid property "' + prop + '"');
}

/**
 * Parse `str`.
 *
 * @param {String} str
 * @return {Array}
 * @api private
 */

function parse(str) {
  return str.split(/\{\{|\}\}/);
}

/**
 * Indent `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function indent(str) {
  return str.replace(/^/gm, '  ');
}

/**
 * Section handler.
 *
 * @param {Object} context obj
 * @param {String} prop
 * @param {Function} thunk
 * @param {Boolean} negate
 * @api private
 */

function section(obj, prop, negate, thunk) {
  var val = obj[prop];
  if (Array.isArray(val)) return val.map(thunk).join('');
  if ('function' == typeof val) return val.call(obj, thunk(obj));
  if (negate) val = !val;
  if (val) return thunk(obj);
  return '';
}

/**
 * Escape the given `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

function escape(html) {
  return String(html)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

},{}],8:[function(require,module,exports){
module.exports = ".stackgl-readme {\n  color: #5B6173;\n  font-weight: 100;\n}\n\n/**\n * Typography\n */\n.stackgl-readme,\n.stackgl-readme pre,\n.stackgl-readme code {\n  font-family: 'Fantasque Sans Mono', 'Ubuntu Mono', 'Inconsolata', monospace;\n}\n\n.stackgl-readme ::selection {\n  background: #DEE7FF;\n}\n.stackgl-readme ::-moz-selection {\n  background: #DEE7FF;\n}\n\n/**\n * Headers\n */\n.stackgl-readme h1,\n.stackgl-readme h2,\n.stackgl-readme h3,\n.stackgl-readme h4,\n.stackgl-readme h5,\n.stackgl-readme h6 {\n  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 100;\n  line-height: 1.2em;\n  color: #34363B;\n  position: relative;\n}\n\n.stackgl-readme > h1:first-child,\n.stackgl-readme > hr + h1:not(:first-child) {\n  font-size: 2.5rem;\n  border-bottom: 0;\n  padding-bottom: 0;\n}\n\n.stackgl-readme > h1:not(:first-child),\n.stackgl-readme > h2 {\n  font-size: 2rem;\n  margin-top: 3rem;\n  border-bottom: 1px dotted #DEE7FF;\n  padding-bottom: 0.4em;\n}\n\n.stackgl-readme h3 {\n  font-weight: 300;\n  margin-top: 2em;\n  color: #4A4F5E;\n}\n\n.stackgl-readme h3 + h3,\n.stackgl-readme h4 + h4 {\n  margin-top: -0.5em;\n}\n\n.stackgl-readme h2 + h3 {\n  margin-top: 0;\n}\n\n.stackgl-readme h1 code,\n.stackgl-readme h2 code,\n.stackgl-readme h3 code,\n.stackgl-readme h4 code,\n.stackgl-readme h5 code,\n.stackgl-readme h6 code {\n  background: transparent;\n  margin: 0;\n  padding: 0;\n}\n\n.stackgl-readme h1 img,\n.stackgl-readme h2 img,\n.stackgl-readme h3 img,\n.stackgl-readme h4 img,\n.stackgl-readme h5 img,\n.stackgl-readme h6 img {\n  display: none;\n}\n\n/**\n * Paragraphs\n */\n.stackgl-readme p,\n.stackgl-readme > ul,\n.stackgl-readme > ol {\n  font-size: 0.9rem;\n  line-height: 1.55em;\n}\n\n/**\n * Links\n */\n.stackgl-readme a {\n  color: #66C4FF;\n  text-decoration: none;\n  text-shadow: 1px 0 #fff, -1px 0 #fff;\n  background: linear-gradient(to bottom, transparent 0%, #66C4FF 1%) repeat-x;\n  padding-bottom: 0px;\n  margin-bottom: -0px;\n  background-size: 1px 1px;\n  background-position: left bottom;\n}\n\n.stackgl-readme a::selection {\n  background: #DEE7FF;\n  text-shadow: 1px 0 rgba(0,0,0,0);\n}\n.stackgl-readme a::-moz-selection {\n  background: #DEE7FF;\n  text-shadow: 1px 0 rgba(0,0,0,0);\n}\n\n/**\n * Horizontal Rules\n */\n.stackgl-readme hr {\n  width: 8px; height: 8px;\n  background: transparent;\n  border: 1px solid #A9B0C2;\n  border-radius: 17px;\n  margin: 4rem auto;\n  position: relative;\n}\n\n.stackgl-readme hr:before,\n.stackgl-readme hr:after {\n  position: absolute;\n  top: 1px;\n  left: -24px;\n  width: 4px; height: 4px;\n  background: transparent;\n  content: '';\n  border-radius: 9px;\n  border: 1px solid #A9B0C2;\n}\n\n.stackgl-readme hr:after {\n  left: auto;\n  right: -24px;\n}\n\n/**\n * Images\n */\n.stackgl-readme img {\n  max-width: 100%;\n  display: block;\n}\n.stackgl-readme a img {\n  /*border-bottom: 1px solid #f00;*/\n}\n\n/**\n * Lists\n */\n.stackgl-readme li {\n  margin-bottom: 0.2em;\n}\n\n.stackgl-readme ul,\n.stackgl-readme ol {\n  margin: 1rem;\n  padding-left: 2rem;\n}\n.stackgl-readme ul ul,\n.stackgl-readme ul ol,\n.stackgl-readme ol ol,\n.stackgl-readme ol ul {\n  margin: 0;\n}\n/**\n * Code/Syntax Highlighting\n */\n.stackgl-readme > pre {\n  background: #383C47;\n  color: #fff;\n  border-radius: 2px;\n  margin: 1rem 0;\n  padding: 1.5rem;\n  font-size: 0.85rem;\n  line-height: 1.2em;\n  overflow-x: auto;\n}\n\n.stackgl-readme code {\n  background: #F6F8FE;\n  padding: 0.125em 0.35em;\n}\n\n.stackgl-readme > pre code,\n.stackgl-readme > pre pre {\n  background: transparent;\n  overflow: visible;\n  padding: 0;\n}\n\n.stackgl-readme .k,\n.stackgl-readme .kd,\n.stackgl-readme .kr,\n.stackgl-readme .s1 { color: #FFE169; }\n.stackgl-readme .mf,\n.stackgl-readme .mi { color: #66C4FF; }\n.stackgl-readme .cm,\n.stackgl-readme .cp,\n.stackgl-readme .c1 { color: #A9B0C2; }\n.stackgl-readme .o,\n.stackgl-readme .p { color: #DEE7FF; }\n\n.stackgl-readme .lang-glsl .k,\n.stackgl-readme .lang-glsl .kd,\n.stackgl-readme .lang-glsl .s1 { color: #61FF90; }\n.stackgl-readme .lang-glsl .mf,\n.stackgl-readme .lang-glsl .mi { color: #FF6F5C; }\n\n.stackgl-readme ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n.stackgl-readme ::-webkit-scrollbar-thumb {\n  background: #5B6173;\n  transition: background 0.2s;\n  -webkit-transition: background 0.2s;\n}\n\n.stackgl-readme ::-webkit-scrollbar-thumb:active {\n  background: #A9B0C2;\n}\n\n/**\n * iframes\n */\n.stackgl-readme iframe {\n  width: 100%;\n  height: 300px;\n  border: 0;\n}\n\n.stackgl-readme h1 + iframe {\n  margin-top: 2rem;\n}\n"

},{}],9:[function(require,module,exports){
var window = require("global/window")
var once = require("once")
var parseHeaders = require('parse-headers')

var messages = {
    "0": "Internal XMLHttpRequest Error",
    "4": "4xx Client Error",
    "5": "5xx Server Error"
}

var XHR = window.XMLHttpRequest || noop
var XDR = "withCredentials" in (new XHR()) ? XHR : window.XDomainRequest

module.exports = createXHR

function createXHR(options, callback) {
    if (typeof options === "string") {
        options = { uri: options }
    }

    options = options || {}
    callback = once(callback)

    var xhr = options.xhr || null

    if (!xhr) {
        if (options.cors || options.useXDR) {
            xhr = new XDR()
        }else{
            xhr = new XHR()
        }
    }

    var uri = xhr.url = options.uri || options.url
    var method = xhr.method = options.method || "GET"
    var body = options.body || options.data
    var headers = xhr.headers = options.headers || {}
    var sync = !!options.sync
    var isJson = false
    var key
    var load = options.response ? loadResponse : loadXhr

    if ("json" in options) {
        isJson = true
        headers["Accept"] = "application/json"
        if (method !== "GET" && method !== "HEAD") {
            headers["Content-Type"] = "application/json"
            body = JSON.stringify(options.json)
        }
    }

    xhr.onreadystatechange = readystatechange
    xhr.onload = load
    xhr.onerror = error
    // IE9 must have onprogress be set to a unique function.
    xhr.onprogress = function () {
        // IE must die
    }
    // hate IE
    xhr.ontimeout = noop
    xhr.open(method, uri, !sync)
                                    //backward compatibility
    if (options.withCredentials || (options.cors && options.withCredentials !== false)) {
        xhr.withCredentials = true
    }

    // Cannot set timeout with sync request
    if (!sync) {
        xhr.timeout = "timeout" in options ? options.timeout : 5000
    }

    if (xhr.setRequestHeader) {
        for(key in headers){
            if(headers.hasOwnProperty(key)){
                xhr.setRequestHeader(key, headers[key])
            }
        }
    } else if (options.headers) {
        throw new Error("Headers cannot be set on an XDomainRequest object")
    }

    if ("responseType" in options) {
        xhr.responseType = options.responseType
    }
    
    if ("beforeSend" in options && 
        typeof options.beforeSend === "function"
    ) {
        options.beforeSend(xhr)
    }

    xhr.send(body)

    return xhr

    function readystatechange() {
        if (xhr.readyState === 4) {
            load()
        }
    }

    function getBody() {
        // Chrome with requestType=blob throws errors arround when even testing access to responseText
        var body = null

        if (xhr.response) {
            body = xhr.response
        } else if (xhr.responseType === 'text' || !xhr.responseType) {
            body = xhr.responseText || xhr.responseXML
        }

        if (isJson) {
            try {
                body = JSON.parse(body)
            } catch (e) {}
        }

        return body
    }

    function getStatusCode() {
        return xhr.status === 1223 ? 204 : xhr.status
    }

    // if we're getting a none-ok statusCode, build & return an error
    function errorFromStatusCode(status, body) {
        var error = null
        if (status === 0 || (status >= 400 && status < 600)) {
            var message = (typeof body === "string" ? body : false) ||
                messages[String(status).charAt(0)]
            error = new Error(message)
            error.statusCode = status
        }

        return error
    }

    // will load the data & process the response in a special response object
    function loadResponse() {
        var status = getStatusCode()
        var body = getBody()
        var error = errorFromStatusCode(status, body)
        var response = {
            body: body,
            statusCode: status,
            statusText: xhr.statusText,
            raw: xhr
        }
        if(xhr.getAllResponseHeaders){ //remember xhr can in fact be XDR for CORS in IE
            response.headers = parseHeaders(xhr.getAllResponseHeaders())
        } else {
            response.headers = {}
        }

        callback(error, response, response.body)
    }

    // will load the data and add some response properties to the source xhr
    // and then respond with that
    function loadXhr() {
        var status = getStatusCode()
        var error = errorFromStatusCode(status)

        xhr.status = xhr.statusCode = status
        xhr.body = getBody()
        xhr.headers = parseHeaders(xhr.getAllResponseHeaders())

        callback(error, xhr, xhr.body)
    }

    function error(evt) {
        callback(evt, xhr)
    }
}


function noop() {}

},{"global/window":10,"once":11,"parse-headers":15}],10:[function(require,module,exports){
(function (global){
if (typeof window !== "undefined") {
    module.exports = window;
} else if (typeof global !== "undefined") {
    module.exports = global;
} else if (typeof self !== "undefined"){
    module.exports = self;
} else {
    module.exports = {};
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],11:[function(require,module,exports){
module.exports = once

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })
})

function once (fn) {
  var called = false
  return function () {
    if (called) return
    called = true
    return fn.apply(this, arguments)
  }
}

},{}],12:[function(require,module,exports){
var isFunction = require('is-function')

module.exports = forEach

var toString = Object.prototype.toString
var hasOwnProperty = Object.prototype.hasOwnProperty

function forEach(list, iterator, context) {
    if (!isFunction(iterator)) {
        throw new TypeError('iterator must be a function')
    }

    if (arguments.length < 3) {
        context = this
    }
    
    if (toString.call(list) === '[object Array]')
        forEachArray(list, iterator, context)
    else if (typeof list === 'string')
        forEachString(list, iterator, context)
    else
        forEachObject(list, iterator, context)
}

function forEachArray(array, iterator, context) {
    for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
            iterator.call(context, array[i], i, array)
        }
    }
}

function forEachString(string, iterator, context) {
    for (var i = 0, len = string.length; i < len; i++) {
        // no such thing as a sparse string.
        iterator.call(context, string.charAt(i), i, string)
    }
}

function forEachObject(object, iterator, context) {
    for (var k in object) {
        if (hasOwnProperty.call(object, k)) {
            iterator.call(context, object[k], k, object)
        }
    }
}

},{"is-function":13}],13:[function(require,module,exports){
module.exports = isFunction

var toString = Object.prototype.toString

function isFunction (fn) {
  var string = toString.call(fn)
  return string === '[object Function]' ||
    (typeof fn === 'function' && string !== '[object RegExp]') ||
    (typeof window !== 'undefined' &&
     // IE8 and below
     (fn === window.setTimeout ||
      fn === window.alert ||
      fn === window.confirm ||
      fn === window.prompt))
};

},{}],14:[function(require,module,exports){

exports = module.exports = trim;

function trim(str){
  return str.replace(/^\s*|\s*$/g, '');
}

exports.left = function(str){
  return str.replace(/^\s*/, '');
};

exports.right = function(str){
  return str.replace(/\s*$/, '');
};

},{}],15:[function(require,module,exports){
var trim = require('trim')
  , forEach = require('for-each')
  , isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    }

module.exports = function (headers) {
  if (!headers)
    return {}

  var result = {}

  forEach(
      trim(headers).split('\n')
    , function (row) {
        var index = row.indexOf(':')
          , key = trim(row.slice(0, index)).toLowerCase()
          , value = trim(row.slice(index + 1))

        if (typeof(result[key]) === 'undefined') {
          result[key] = value
        } else if (isArray(result[key])) {
          result[key].push(value)
        } else {
          result[key] = [ result[key], value ]
        }
      }
  )

  return result
}
},{"for-each":12,"trim":14}]},{},[4]);
