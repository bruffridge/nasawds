/*
* * * * * ==============================
* * * * * ==============================
* * * * * ==============================
* * * * * ==============================
========================================
========================================
========================================
----------------------------------------
USWDS SASS GULPFILE
----------------------------------------
*/

var autoprefixer  = require('autoprefixer');
var autoprefixerOptions = require('./node_modules/uswds-gulp/config/browsers');
var cssnano       = require('cssnano');
var gulp          = require('gulp');
var mqpacker      = require('css-mqpacker');
var path          = require('path');
var pkg           = require('./node_modules/uswds/package.json');
var postcss       = require('gulp-postcss');
var rename        = require('gulp-rename');
var replace       = require('gulp-replace');
var sass          = require('gulp-sass');
var sourcemaps    = require('gulp-sourcemaps');
var uswds         = require('./node_modules/uswds-gulp/config/uswds');

/*
----------------------------------------
PATHS
----------------------------------------
- All paths are relative to the
  project root
- Don't use a trailing `/` for path
  names
----------------------------------------
*/

// Project Sass source directory
const PROJECT_SASS_SRC = './src/theme';

// Images destination
const IMG_DEST = './src/img';

// Fonts destination
const FONTS_DEST = './src/fonts';

// Javascript destination
const JS_DEST = './src/js';

// Compiled CSS destination
const CSS_DEST = './src/css';

// Site CSS destination
// Like the _site/assets/css directory in Jekyll, if necessary.
// If using, uncomment line 112
//const SITE_CSS_DEST = './path/to/site/css/destination';

/*
----------------------------------------
TASKS
----------------------------------------
*/

gulp.task('copy-uswds-setup', () => {
  return gulp.src(`${uswds}/scss/theme/**/**`)
  .pipe(gulp.dest(`${PROJECT_SASS_SRC}`));
});

gulp.task('copy-uswds-fonts', () => {
  return gulp.src(`${uswds}/fonts/**/**`)
  .pipe(gulp.dest(`${FONTS_DEST}`));
});

gulp.task('copy-uswds-images', () => {
  return gulp.src(`${uswds}/img/**/**`)
  .pipe(gulp.dest(`${IMG_DEST}`));
});

gulp.task('copy-nasa-images', () => {
  return gulp.src(`./src/theme/img/**/**`)
  .pipe(gulp.dest(`${IMG_DEST}`));
});

gulp.task('copy-uswds-js', () => {
  return gulp.src(`${uswds}/js/**/**`)
  .pipe(gulp.dest(`${JS_DEST}`));
});

gulp.task('build-sass', function(done) {
  var plugins = [
    // Autoprefix
    autoprefixer(autoprefixerOptions),
    // Pack media queries
    mqpacker({ sort: true }),
    // Minify
    cssnano(({ autoprefixer: { browsers: autoprefixerOptions }}))
  ];
  return gulp.src([
      `${PROJECT_SASS_SRC}/*.scss`
    ])
    .pipe(sourcemaps.init({ largeFile: true }))
    .pipe(sass({
        includePaths: [
          `${PROJECT_SASS_SRC}`,
          `${uswds}/scss`,
          `${uswds}/scss/packages`,
        ]
      }))
    .pipe(replace(
      /\buswds @version\b/g,
      'based on uswds v' + pkg.version
    ))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    // uncomment the next line if necessary for Jekyll to build properly
    //.pipe(gulp.dest(`${SITE_CSS_DEST}`))
    .pipe(gulp.dest(`${CSS_DEST}`));
});

gulp.task('init', gulp.series(
  'copy-uswds-fonts',
  'copy-uswds-images',
  'copy-nasa-images',
  'copy-uswds-js',
  'build-sass',
));

gulp.task('watch-sass', function () {
  gulp.watch(`${PROJECT_SASS_SRC}/**/*.scss`, gulp.series('build-sass'));
});

gulp.task('watch', gulp.series('build-sass', 'watch-sass'));

gulp.task('default', gulp.series('watch'));

require('./release');