import * as gulp from 'gulp';
import * as del from 'del';
import * as gulpLoadPlugins from 'gulp-load-plugins';
const typescript = require('gulp-typescript');
import {DIST_DIR, PROD_DEST, TMP_DIR, APP_SRC} from './gulp/config';
import {join} from 'path';
const tscConfig = require('./tsconfig.json');

var plugins = gulpLoadPlugins();

export function task(taskname: string, option?: string) {
  return require(join('.', 'gulp', taskname))(gulp, gulpLoadPlugins(), option);
}


gulp.task('clean', () => {
	del(PROD_DEST);
});

gulp.task('build.prod', ['clean'],  () =>{
	let src = [
		'typings/browser.d.ts',
		join(APP_SRC, '**/*.ts'),
	];
	let result = gulp.src(src)
		.pipe(typescript(tscConfig.compilerOptions))
		.pipe(gulp.dest('dist/prod'));
});

// gulp.task('serve', done => );
// gulp.task('test', done => );
