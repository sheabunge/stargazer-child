module.exports = function(grunt) {
	'use strict';

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		watch: {

			css: {
				files: ['style.scss'],
				tasks: ['sass']
			},

			js: {
				files: ['js/**/*.js'],
				tasks: ['jshint']
			},

			livereload: {
				options: {
					livereload: true
				},
				files: [
					'style.css',
					'js/**/*.js',
					'*.html',
					'*.php',
					'images/**/*.{png,jpg,jpeg,gif,webp,svg}'
				]
			}
		},

		jshint: {
			options: {
				force: true,
				eqeqeq: true,
				newcap: true,
				eqnull: true,
				smarttabs: true,
				globals: [
					'module'
				]
			},
			gruntfile: ['Gruntfile.js'],
			dist: ['js/**/*.js']
		},

		sass: {
			dist: {
				files: {
					'style.css': 'style.css'
				}
			}
		}
	});

	grunt.registerTask( 'default', ['jshint', 'sass'] );
};
