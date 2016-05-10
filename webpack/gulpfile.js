/**
 * Created by kimxogus on 2016-05-10.
 */

/**
 * Import Libraries
 */
var
    gulp            = require('gulp'),
    pump            = require('pump'),
    watch           = require('gulp-watch'),
    webpack         = require('webpack-stream'),
    runSequence     = require('run-sequence'),
    clean           = require('gulp-clean');


/**
 * Path Variables
 */
const
    BASE_SRC_DIR    = 'src',
    BASE_DIST_DIR   = 'dist',

    JS_BASE         = "/js",
    CSS_BASE        = "/css",

    HTML_SRC        = BASE_SRC_DIR + "/**/*.html",              HTML_DIST   = BASE_DIST_DIR,
    APP_SRC         = [BASE_SRC_DIR + JS_BASE + "/**/*.js", BASE_SRC_DIR + CSS_BASE + "/**/*.css"],
    APP_DIST        = BASE_DIST_DIR + JS_BASE;


/**
 * Task Names
 */
const
    CLEAN           = "clean",
    BUILD           = "build",
    WATCH           = "watch",
    WEBPACK         = "webpack",
    MOVE_HTML       = "move-html";



/**
 * Default Task
 * This is default task that will be executed by command 'gulp'
 */
gulp.task('default', function(cb) {
    runSequence(
        BUILD,
        WATCH,
        cb
    );
});



/**
 * Build Task
 */
gulp.task(BUILD, function(cb) {
    runSequence(
        CLEAN,
        [WEBPACK, MOVE_HTML],
        cb
    );
});



/**
 * Clean Task
 */
gulp.task(CLEAN, function(cb) {
    pump([
        gulp.src(BASE_DIST_DIR, {read: false}),
        clean({force: true})
    ], cb);
});



/**
 * Watch Tasks
 */
gulp.task(WATCH, function() {
    gulp.watch(APP_SRC, WEBPACK).on('change', watcherHandler);
});

function watcherHandler(e) {
    console.log("File " + e.path.replace(__dirname, "") + " was " + e.type + ", running tasks...");
}


/**
 * Minifying Source Tasks
 */
gulp.task(WEBPACK, function(cb) {
    pump([
        gulp.src(APP_SRC),
        webpack( require('./webpack.config')),
        gulp.dest(APP_DIST)
    ], cb);
});


/**
 * Moving Resources Tasks
 */
gulp.task(MOVE_HTML, function(cb) {
    pump([
        gulp.src(HTML_SRC),
        gulp.dest(HTML_DIST)
    ], cb);
});