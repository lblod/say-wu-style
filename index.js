'use strict';

module.exports = {
  name: require('./package').name,
  included: function included(app) {
    this._super.included.apply(this, app);
    app.import('vendor/lblod/vlaanderen-ui.css');
  },
  contentFor: function(type, config) {
    let version = '2.latest';

    if (config['vo-webuniversum'] && config['vo-webuniversum']['version'])
      version = config['vo-webuniversum']['version'];

    if (type === 'head'){
      return `

			  <!-- Link to the stylesheet -->
			  <!-- This is a temporary style sheet. It should be added via NPM -->
			  <link rel="stylesheet" href="//ui.vlaanderen.be/3.latest/css/vlaanderen-ui.css" type="text/css" />

			  <!-- <link rel="preload" as="font" href="https://d1l6j3bn1os9t0.cloudfront.net/3.latest/font/flanders/flanders-sans-light.woff2" type=”font/woff2” crossorigin> -->
			  <!-- <link rel="preload" as="font" href="https://d1l6j3bn1os9t0.cloudfront.net/3.latest/font/flanders/flanders-sans-regular.woff2" type=”font/woff2” crossorigin> -->
			  <!-- <link rel="preload" as="font" href="https://d1l6j3bn1os9t0.cloudfront.net/3.latest/font/flanders/flanders-sans-medium.woff2" type=”font/woff2” crossorigin> -->
			  <!-- <link rel="preload" as="font" href="https://d1l6j3bn1os9t0.cloudfront.net/3.latest/font/flanders/flanders-sans-bold.woff2" type=”font/woff2” crossorigin> -->

			  <!-- <link rel="preload" as="font" href="https://d1l6j3bn1os9t0.cloudfront.net/3.latest/font/flanders/flanders-serif-light.woff2" type=”font/woff2” crossorigin> -->
			  <!-- <link rel="preload" as="font" href="https://d1l6j3bn1os9t0.cloudfront.net/3.latest/font/flanders/flanders-serif-regular.woff2" type=”font/woff2” crossorigin> -->
			  <!-- <link rel="preload" as="font" href="https://d1l6j3bn1os9t0.cloudfront.net/3.latest/font/flanders/flanders-serif-medium.woff2" type=”font/woff2” crossorigin> -->
			  <!-- <link rel="preload" as="font" href="https://d1l6j3bn1os9t0.cloudfront.net/3.latest/font/flanders/flanders-serif-bold.woff2" type=”font/woff2” crossorigin> -->

        <link href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet" />`;
    } else if (type === 'body'){
      return `<script src="//dij151upo6vad.cloudfront.net/${version}/js/vlaanderen-ui.js" type="text/javascript"></script>\n` +
        '<div id="ember-vo-webuniversum-wormhole"></div>';
    } else {
      return '';
    }
  },
  isDevelopingAddon: function() {
  	return true
  }
};
