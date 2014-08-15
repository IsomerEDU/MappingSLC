'use strict';

module.exports = {
	app: {
		title: 'Mapping Salt Lake City',
		description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js',
		keywords: 'MongoDB, Express, AngularJS, Node.js'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.css',
                '//cdn.leafletjs.com/leaflet-0.7.3/leaflet.css',
                '//api.tiles.mapbox.com/mapbox.js/v2.0.1/mapbox.css',
                '//api.tiles.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v0.0.3/leaflet.fullscreen.css'
			],
			js: [
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js', 
				'public/lib/angular-cookies/angular-cookies.js', 
				'public/lib/angular-animate/angular-animate.js', 
				'public/lib/angular-touch/angular-touch.js', 
				'public/lib/angular-sanitize/angular-sanitize.js', 
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
                '//ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js',
                '//cdn.leafletjs.com/leaflet-0.7.3/leaflet.js',
                '//api.tiles.mapbox.com/mapbox.js/v2.0.1/mapbox.js',
                'public/lib/angular-leaflet-directive/dist/angular-leaflet-directive.js',
                '//api.tiles.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v0.0.3/Leaflet.fullscreen.min.js'
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};