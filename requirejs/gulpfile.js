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
    babel           = require('gulp-babel'),
    uglify          = require('gulp-uglify'),
    cleanCSS        = require('gulp-clean-css'),
    runSequence     = require('run-sequence'),
    clean           = require('gulp-clean');


/**
 * Path Variables
 */
const
    BASE_SRC_DIR     = 'src',
    BASE_DIST_DIR    = 'dist',

    JS_BASE          = "/js",
    CSS_BASE         = "/css",
    LIB_BASE         = "/lib",
    BOWER_BASE       = "../bower_components",
    REQUIRE_CSS_BASE = BOWER_BASE + "/require-css",

    HTML_SRC         = BASE_SRC_DIR + "/**/*.html",              HTML_DIST   = BASE_DIST_DIR,
    JS_SRC           = BASE_SRC_DIR + JS_BASE + "/**/*.js",      JS_DIST     = BASE_DIST_DIR + JS_BASE,
    CSS_SRC          = BASE_SRC_DIR + CSS_BASE + "/**/*.css",    CSS_DIST    = BASE_DIST_DIR + CSS_BASE,
    LIB_SRC          = [BOWER_BASE + "/**/*", BASE_SRC_DIR + LIB_BASE + "/**/*"],
    LIB_DIST         = BASE_DIST_DIR + LIB_BASE,
    REQUIRE_CSS_SRC  = REQUIRE_CSS_BASE + "/*.js",               REQUIRE_CSS_DIST = BASE_DIST_DIR;


/**
 * Task Names
 */
const
    CLEAN            = "clean",

    BUILD            = "build",

    WATCH            = "watch",
    WATCH_JS         = "watch-js",
    WATCH_CSS        = "watch-css",
    WATCH_HTML       = "watch-html",

    MINIFY_JS        = "minify-js",
    MINIFY_CSS       = "minify-css",

    MOVE_HTML        = "move-html",
    MOVE_LIB         = "move-lib",
    MOVE_REQUIRE_CSS = "move-require-css";



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
        [MINIFY_JS, MINIFY_CSS, MOVE_HTML, MOVE_LIB, MOVE_REQUIRE_CSS],
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
gulp.task(WATCH, [WATCH_JS, WATCH_CSS, WATCH_HTML]);

function watcherHandler(e) {
    console.log("File " + e.path.replace(__dirname, "") + " was " + e.type + ", running tasks...");
}

gulp.task(WATCH_JS, function() {
    gulp.watch(JS_SRC, [MINIFY_JS]).on('change', watcherHandler);
});

gulp.task(WATCH_CSS, function() {
    gulp.watch(CSS_SRC, [MINIFY_CSS]).on('change', watcherHandler);
});

gulp.task(WATCH_HTML, function() {
    gulp.watch(HTML_SRC, [MOVE_HTML]).on('change', watcherHandler);
});



/**
 * Minifying Source Tasks
 */
gulp.task(MINIFY_JS, function(cb) {
    pump([
        gulp.src(JS_SRC),
        babel({
            presets: ['es2015', 'react']
        }),
        uglify({
            mangle: true
        }),
        gulp.dest(JS_DIST)
    ], cb);
});

gulp.task(MINIFY_CSS, function(cb) {
    pump([
        gulp.src(CSS_SRC),
        cleanCSS(),
        gulp.dest(CSS_DIST)
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

gulp.task(MOVE_LIB, function(cb) {
    pump([
        gulp.src(LIB_SRC),
        gulp.dest(LIB_DIST)
    ], cb);
});

gulp.task(MOVE_REQUIRE_CSS, function(cb) {
    pump([
        gulp.src(REQUIRE_CSS_SRC),
        uglify({
            mangle: true
        }),
        gulp.dest(REQUIRE_CSS_DIST)
    ], cb)
});