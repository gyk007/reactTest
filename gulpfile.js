"use strict";

var gulp         = require('gulp');
var concat       = require('gulp-concat');
var react        = require('gulp-react');
var concatCss    = require('gulp-concat-css');
var cleanCSS     = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');


// Пути к js файлам
var js_files = [
	// Бибилиотеки
	'./bower_components/react/react.js',
	'./bower_components/react/react-dom.js',
	// Проект
	'./js/app.js',
];

// Пути к css файлам
var css_files = [
	'./css/*.css'
];

// Собираем сss файлы
gulp.task('css', function () {
	gulp.src(css_files)
		.pipe(autoprefixer('last 15 versions'))
		.pipe(concatCss('styles/main.css'))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('app/'))
});

// Собираем JS библиотеки
gulp.task('js', function() {
	gulp.src(js_files)
		.pipe(react())
		.pipe(concat('main.js'))
		.pipe(gulp.dest('./app/js/'))
});

gulp.task('jsWatch', function () {
	gulp.watch(js_files, ['js']);
});



gulp.task('default', ['js', 'css']);