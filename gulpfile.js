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

from https://designsystem.digital.gov/documentation/getting-started/developers/phase-two-compile/
*/

/**
* Import uswds-compile
*/
const uswds = require("@uswds/compile");
const gulp = require("gulp");

/**
* USWDS version
* Set the major version of USWDS you're using
* (Current options are the numbers 2 or 3)
*/
uswds.settings.version = 3;

/**
* Path settings
* Set as many as you need
*/
uswds.paths.src.projectSass = './src/theme';
uswds.paths.dist.theme = './src/theme';
uswds.paths.dist.img = './src/img';
uswds.paths.dist.fonts = './src/fonts';
uswds.paths.dist.js = './src/js';
uswds.paths.dist.css = './src/css';

/**
* Gulp tasks
*/
gulp.task("copy-nasa-images", () => {
  return gulp.src(`${uswds.paths.dist.theme}/img/**`)
  .pipe(gulp.dest(uswds.paths.dist.img));
});
gulp.task('copy', gulp.series(uswds.copyAssets, 'copy-nasa-images'));
gulp.task('init', gulp.series('copy', uswds.compile));
gulp.task('watch', uswds.watch);


gulp.task("default", gulp.series("watch"));

require("./release");
