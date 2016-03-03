import * as gulp from 'gulp';
import * as del from 'del';
import * as gulpLoadPlugins from 'gulp-load-plugins';
const typescript = require('gulp-typescript');
import {DIST_DIR, PROD_DEST, TMP_DIR, APP_SRC} from './gulp/config';
import {join} from 'path';
const tscConfig = require('./tsconfig.json');
var tslint = require('gulp-tslint');
var less = require('gulp-less');
var browserSync = require('browser-sync');
var superstatic = require('superstatic');
var replace = require('gulp-replace');

var plugins = gulpLoadPlugins();

export function task(taskname: string, option?: string) {
  return require(join('.', 'gulp', taskname))(gulp, gulpLoadPlugins(), option);
}


gulp.task('clean', () => {
	return del(PROD_DEST + '/**', { force: true});
});

gulp.task('ts-lint', () => {
	let src = [
		'typings/browser.d.ts',
		'typings/main.d.ts',
		join(APP_SRC, '**/*.ts'),
	];
	return gulp.src(src)
		.pipe(tslint());
});

gulp.task('compile-ts', () =>{
	del(PROD_DEST);
	let src = [
		'typings/browser.d.ts',
		join(APP_SRC, '**/*.ts'),
		join(APP_SRC, 'main.ts'),
	];
	let result = gulp.src(src)
		.pipe(typescript(tscConfig.compilerOptions))
		.pipe(gulp.dest(PROD_DEST));
	return result;
});

gulp.task('templates', () => {
	let src = [
		join(APP_SRC, '**/*.html'),
		'!'+join(APP_SRC, 'index.html')
	];
	let result = gulp.src(src)
		.pipe(gulp.dest(PROD_DEST));
	return result;
});

gulp.task('compile-less', () => {
	let src = [
		join(APP_SRC, '**/*.less'),
	];
	let result = gulp.src(src)
		.pipe(less())
		.pipe(gulp.dest(PROD_DEST));
	return result;
});

gulp.task('modify-index', function () {
	let src = join(APP_SRC, 'index.html');
  	return gulp.src(src)
    	// .pipe(replace(JS_LIBS_DEV, JS_LIBS_PROD))
		.pipe(gulp.dest(PROD_DEST));
});

gulp.task('dev', () => {
	browserSync({
	    port: 3002,
	    file: ['index.html', '**/*.js', '**/*.ts', '**/*.html', '**/*.less'],
	    injectChange: true,
	    logFileChange: false,
	    logLevel: 'silent',
	    notify: true,
	    reloadDelay: 0,
	    server: {
		    baseDir: './',
		    middleware: superstatic({debug: false})
	    }
  	});
  	// gulp.watch(['app/**/*.less', 'app/**/*.html', 'app/**/*.ts', 'app/**/*.js', 'index.html'], ['reload']);
});

var JS_LIBS_PROD = `
    <script src="lib/es6-shim.min.js"></script>
    <script src="lib/system-polyfills.js"></script>
    <script src="lib/angular2-polyfills.js"></script>
    <script src="lib/system.src.js"></script>
    <script src="lib/typescript.js"></script>
    <script src="lib/Rx.js"></script>
    <script src="lib/angular2.dev.js"></script>
    <script src="lib/router.dev.js"></script>`;

var JS_LIBS_DEV = `
    <script src="node_modules/es6-shim/es6-shim.min.js"></script>
    <script src="node_modules/systemjs/dist/system-polyfills.js"></script>
    <script src="node_modules/angular2/bundles/angular2-polyfills.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>
    <script src="node_modules/typescript/lib/typescript.js"></script>
    <script src="node_modules/rxjs/bundles/Rx.js"></script>
    <script src="node_modules/angular2/bundles/angular2.dev.js"></script>
    <script src="node_modules/angular2/bundles/router.dev.js"></script>`;
