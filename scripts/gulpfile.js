const path = require('path');

const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

const webpackDevelopmentCfg = require('./webpack.development');
const webpackProductionCfg = require('./webpack.production');


//
// Tasks
//

gulp.task('development', BuildAssetsDevelopment);
gulp.task('production', BuildAssetsProduction);



//
// Methods
//

function BuildAssetsDevelopment() {
  return gulp.src(path.resolve(__dirname, '../src'))
          .pipe(webpackStream(webpackDevelopmentCfg, webpack))
          .pipe(gulp.dest(path.resolve(__dirname, '../public/assets')))
};

function BuildAssetsProduction() {
  return gulp.src(path.resolve(__dirname, '../src'))
          .pipe(webpackStream(webpackProductionCfg, webpack))
          .pipe(gulp.dest(path.resolve(__dirname, '../public/assets')))
};
