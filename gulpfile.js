function generateSassDoc(cb) {
  // place code for your default task here
  var gulp = require('gulp');
  var converter = require('sass-convert');
  var sassdoc = require('sassdoc');
  var sass = require('gulp-sass');

  gulp.task('docs', function() {
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
      basePath: 'https://github.com/SassDoc/sassdoc',
    };
    return gulp.src('/assets/scss/**/*.+(scss|sass)')
    .pipe(converter({
      from: 'scss',
      to: 'sass',
    }))
    .pipe(sassdoc(options))
    .pipe(sass())
    .pipe(gulp.dest('/docs'));
  });

  cb();
}

exports.default = generateSassDoc;
