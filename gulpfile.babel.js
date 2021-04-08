'use strict';

import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import sass from 'gulp-sass';
import cssnano from 'cssnano';
import rename from 'gulp-rename';

import pkg from './package.json';

gulp.task('css', () =>
	gulp.src('style.scss')
		.pipe(rename({extname: '.css'}))
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss([
			cssnano()
		]))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('.')));

gulp.task('default', gulp.parallel('css'));
