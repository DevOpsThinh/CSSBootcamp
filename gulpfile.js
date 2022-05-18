/**
 * Using Gulp pipelines to use SassDoc 2.0 to generate powerful documentation.  
 * 
 * @author Nguyen Truong Thinh
 * @reference http://sassdoc.com/gulp/
*/
  var gulp = require('gulp');
  var sassdoc = require('sassdoc');

  gulp.task('sdocs', function() {
    var options = {
      dest: 'docs',
      verbose: true,
      display: {
        access: ['public', 'private'],
        alias: true,
        watermark: true,
      },
      groups: {
        'undefined': 'helpers'
      },
      theme: 'default',
      package: './package.json',
      basePath: 'https://github.com/DevOpsThinh/CSSBootcamp/tree/master/assets/scss',
    };
    return gulp.src('assets/scss/**/*.scss')
      .pipe(sassdoc(options))
      .pipe(gulp.dest('/docs'));
  });

  // var converter = require('sass-convert');
  // gulp.task('sconverter', function() {
  //   var options = {
  //     dest: 'docs',
  //     verbose: true,
  //     display: {
  //       access: ['public', 'private'],
  //       alias: true,
  //       watermark: true,
  //     },
  //     groups: {
  //       'undefined': 'helpers'
  //     },
  //     theme: 'default',
  //     package: './package.json',
  //     basePath: 'https://github.com/SassDoc/sassdoc',
  //   };
  //   return gulp.src('assets/scss/**/*.+(sass|scss)')
  //     .pipe(converter({
  //       from: 'sass',
  //       to: 'scss',
  //     }))
  //     .pipe(sassdoc(options))
  //     .pipe(gulp.dest('/docs'));
  // });
