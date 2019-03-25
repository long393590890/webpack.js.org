(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{430:function(n,s,a){"use strict";a.r(s),s.default='<p><a href="https://npmjs.com/package/mini-css-extract-plugin"><img src="https://img.shields.io/npm/v/mini-css-extract-plugin.svg" alt="npm"></a>\n<a href="https://david-dm.org/webpack-contrib/mini-css-extract-plugin"><img src="https://david-dm.org/webpack-contrib/mini-css-extract-plugin.svg" alt="deps"></a>\n<a href="https://circleci.com/gh/webpack-contrib/mini-css-extract-plugin"><img src="https://img.shields.io/circleci/project/github/webpack-contrib/mini-css-extract-plugin.svg" alt="tests"></a>\n<a href="https://codecov.io/gh/webpack-contrib/mini-css-extract-plugin"><img src="https://codecov.io/gh/webpack-contrib/mini-css-extract-plugin/branch/master/graph/badge.svg" alt="coverage"></a>\n<a href="https://gitter.im/webpack/webpack"><img src="https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg" alt="chat"></a></p>\n<p>This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.</p>\n<p>It builds on top of a new webpack v4 feature (module types) and requires webpack 4 to work.</p>\n<p>Compared to the extract-text-webpack-plugin:</p>\n<ul>\n<li>Async loading</li>\n<li>No duplicate compilation (performance)</li>\n<li>Easier to use</li>\n<li>Specific to CSS</li>\n</ul>\n<p>TODO:</p>\n<ul>\n<li>HMR support</li>\n</ul>\n<h2 id="install">Install<a href="#install" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev mini-css-extract-plugin</code></pre>\n<h2 id="usage">Usage<a href="#usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h3 id="configuration">Configuration<a href="#configuration" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<h4 id="minimal-example">Minimal example<a href="#minimal-example" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"mini-css-extract-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token comment">// Options similar to the same options in webpackOptions.output</span>\n      <span class="token comment">// both options are optional</span>\n      filename<span class="token punctuation">:</span> <span class="token string">"[name].css"</span><span class="token punctuation">,</span>\n      chunkFilename<span class="token punctuation">:</span> <span class="token string">"[id].css"</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.css$/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>\n            options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n              <span class="token comment">// you can specify a publicPath here</span>\n              <span class="token comment">// by default it use publicPath in webpackOptions.output</span>\n              publicPath<span class="token punctuation">:</span> <span class="token string">\'../\'</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token string">"css-loader"</span>\n        <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<h4 id="advanced-configuration-example">Advanced configuration example<a href="#advanced-configuration-example" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>This plugin should be used only on <code>production</code> builds without <code>style-loader</code> in the loaders chain, especially if you want to have HMR in <code>development</code>.</p>\n<p>Here is an example to have both HMR in <code>development</code> and your styles extracted in a file for <code>production</code> builds.</p>\n<p>(Loaders options left out for clarity, adapt accordingly to your needs.)</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"mini-css-extract-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> devMode <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">\'production\'</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token comment">// Options similar to the same options in webpackOptions.output</span>\n      <span class="token comment">// both options are optional</span>\n      filename<span class="token punctuation">:</span> devMode <span class="token operator">?</span> <span class="token string">\'[name].css\'</span> <span class="token punctuation">:</span> <span class="token string">\'[name].[hash].css\'</span><span class="token punctuation">,</span>\n      chunkFilename<span class="token punctuation">:</span> devMode <span class="token operator">?</span> <span class="token string">\'[id].css\'</span> <span class="token punctuation">:</span> <span class="token string">\'[id].[hash].css\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.(sa|sc|c)ss$/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          devMode <span class="token operator">?</span> <span class="token string">\'style-loader\'</span> <span class="token punctuation">:</span> MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>\n          <span class="token string">\'css-loader\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'postcss-loader\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'sass-loader\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<h3 id="minimizing-for-production">Minimizing For Production<a href="#minimizing-for-production" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>While webpack 5 is likely to come with a CSS minimizer built-in, with webpack 4 you need to bring your own. To minify the output, use a plugin like <a href="https://github.com/NMFR/optimize-css-assets-webpack-plugin">optimize-css-assets-webpack-plugin</a>. Setting <code>optimization.minimizer</code> overrides the defaults provided by webpack, so make sure to also specify a JS minimizer:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> TerserJSPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"terser-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"mini-css-extract-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> OptimizeCSSAssetsPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"optimize-css-assets-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    minimizer<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token keyword">new</span> <span class="token class-name">TerserJSPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token keyword">new</span> <span class="token class-name">OptimizeCSSAssetsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      filename<span class="token punctuation">:</span> <span class="token string">"[name].css"</span><span class="token punctuation">,</span>\n      chunkFilename<span class="token punctuation">:</span> <span class="token string">"[id].css"</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.css$/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>\n          <span class="token string">"css-loader"</span>\n        <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<h3 id="features">Features<a href="#features" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<h4 id="using-preloaded-or-inlined-css">Using preloaded or inlined CSS<a href="#using-preloaded-or-inlined-css" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>The runtime code detects already added CSS via <code>&#x3C;link></code> or <code>&#x3C;style></code> tag.\nThis can be useful when injecting CSS on server-side for Server-Side-Rendering.\nThe <code>href</code> of the <code>&#x3C;link></code> tag has to match the URL that will be used for loading the CSS chunk.\nThe <code>data-href</code> attribute can be used for <code>&#x3C;link></code> and <code>&#x3C;style></code> too.\nWhen inlining CSS <code>data-href</code> must be used.</p>\n<h4 id="extracting-all-css-in-a-single-file">Extracting all CSS in a single file<a href="#extracting-all-css-in-a-single-file" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>Similar to what <a href="/plugins/extract-text-webpack-plugin/">extract-text-webpack-plugin</a> does, the CSS\ncan be extracted in one CSS file using <code>optimization.splitChunks.cacheGroups</code>.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"mini-css-extract-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    splitChunks<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      cacheGroups<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        styles<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          name<span class="token punctuation">:</span> <span class="token string">\'styles\'</span><span class="token punctuation">,</span>\n          test<span class="token punctuation">:</span> <span class="token regex">/\\.css$/</span><span class="token punctuation">,</span>\n          chunks<span class="token punctuation">:</span> <span class="token string">\'all\'</span><span class="token punctuation">,</span>\n          enforce<span class="token punctuation">:</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      filename<span class="token punctuation">:</span> <span class="token string">"[name].css"</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.css$/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>\n          <span class="token string">"css-loader"</span>\n        <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<h4 id="extracting-css-based-on-entry">Extracting CSS based on entry<a href="#extracting-css-based-on-entry" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>You may also extract the CSS based on the webpack entry name. This is especially useful if you import routes dynamically\nbut want to keep your CSS bundled according to entry. This also prevents the CSS duplication issue one had with the\nExtractTextPlugin.</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"mini-css-extract-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">recursiveIssuer</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>m<span class="token punctuation">.</span>issuer<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">recursiveIssuer</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>issuer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>m<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> m<span class="token punctuation">.</span>name<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    foo<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'src/foo\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    bar<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'src/bar\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    splitChunks<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      cacheGroups<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        fooStyles<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          name<span class="token punctuation">:</span> <span class="token string">\'foo\'</span><span class="token punctuation">,</span>\n          test<span class="token punctuation">:</span> <span class="token punctuation">(</span>m<span class="token punctuation">,</span>c<span class="token punctuation">,</span>entry <span class="token operator">=</span> <span class="token string">\'foo\'</span><span class="token punctuation">)</span> <span class="token operator">=></span> m<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">\'CssModule\'</span> <span class="token operator">&#x26;&#x26;</span> <span class="token function">recursiveIssuer</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token operator">===</span> entry<span class="token punctuation">,</span>\n          chunks<span class="token punctuation">:</span> <span class="token string">\'all\'</span><span class="token punctuation">,</span>\n          enforce<span class="token punctuation">:</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        barStyles<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          name<span class="token punctuation">:</span> <span class="token string">\'bar\'</span><span class="token punctuation">,</span>\n          test<span class="token punctuation">:</span> <span class="token punctuation">(</span>m<span class="token punctuation">,</span>c<span class="token punctuation">,</span>entry <span class="token operator">=</span> <span class="token string">\'bar\'</span><span class="token punctuation">)</span> <span class="token operator">=></span> m<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">\'CssModule\'</span> <span class="token operator">&#x26;&#x26;</span> <span class="token function">recursiveIssuer</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token operator">===</span> entry<span class="token punctuation">,</span>\n          chunks<span class="token punctuation">:</span> <span class="token string">\'all\'</span><span class="token punctuation">,</span>\n          enforce<span class="token punctuation">:</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      filename<span class="token punctuation">:</span> <span class="token string">"[name].css"</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.css$/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>\n          <span class="token string">"css-loader"</span>\n        <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<h4 id="long-term-caching">Long Term Caching<a href="#long-term-caching" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>For long term caching use <code>filename: "[contenthash].css"</code>. Optionally add <code>[name]</code>.</p>\n<h3 id="media-query-plugin">Media Query Plugin<a href="#media-query-plugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>If you\'d like to extract the media queries from the extracted CSS (so mobile users don\'t need to load desktop or tablet specific CSS anymore) you should use one of the following plugins:</p>\n<ul>\n<li><a href="https://github.com/SassNinja/media-query-plugin">Media Query Plugin</a></li>\n<li><a href="https://github.com/mike-diamond/media-query-splitting-plugin">Media Query Splitting Plugin</a></li>\n</ul>\n<h2 id="maintainers">Maintainers<a href="#maintainers" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<table>\n  <tbody>\n    <tr>\n      <td align="center">\n        <a href="https://github.com/sokra">\n          <img width="150" height="150" src="https://github.com/sokra.png?size=150">\n          </br>\n          Tobias Koppers\n        </a>\n      </td>\n    </tr>\n  <tbody>\n</table>\n<h2 id="license">License<a href="#license" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><a href="https://github.com/webpack-contrib/mini-css-extract-plugin/blob/master/LICENSE">MIT</a></p>\n'}}]);