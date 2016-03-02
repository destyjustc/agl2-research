import * as util from 'gulp-util';
import * as chalk from 'chalk';
import * as del from 'del';
import {DIST_DIR, PROD_DEST, TMP_DIR} from './config';

export = function clean(gulp, plugins, option) {
  return function(done) {
    cleanAll(done);
  };
};

function cleanAll(done) {
  del(DIST_DIR);
}
