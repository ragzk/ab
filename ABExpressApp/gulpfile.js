var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var bower = require('gulp-bower-files');
var gulpFilter = require('gulp-filter');

var bowerSrc = {
    bower: ['bower.json', '.bowerrc']
}
gulp.task('bowerComponentsJS', function () {
    var jsFilter = gulpFilter('**/*.js');
    var jsFiles = './bower_components/bxslider-4/dist/jquery.bxslider.js';
    bower()
        .pipe(jsFilter)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./public/javascripts/'));

    gulp.src(jsFiles)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./public/javascripts/'));
});

gulp.task('bowerComponentsCSS', function () {
    var cssFilter = gulpFilter('**/*.css')

    bower()
        .pipe(cssFilter)
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('./public/javascripts/'));
});


gulp.task('localScripts', function () {
    return gulp.src(['./public/javascripts/app/app.js', './public/javascripts/app/controllers/*.js', './public/javascripts/app/directives/*.js', './public/javascripts/custom/postalAngularWrapper.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./public/javascripts/app'));
});


//var jsFiles = './public/javascripts/app/**/*.js',  
//    jsDest = 'dist/scripts';

//gulp.task('scripts', function () {
//    return gulp.src(jsFiles)
//        .pipe(concat('scripts.js'))
//        .pipe(gulp.dest(jsDest));
//});

//var config = {
//    //Include all js files but exclude any min.js files
//    src: ['./public/javascripts/app/controllers/agentController.js', '!./public/javascripts/app/**/*.min.js']
//}

//console.log('hello');

//// Combine and minify all files from the app folder
//// This tasks depends on the clean task which means gulp will ensure that the 
//// Clean task is completed before running the scripts task.
//gulp.task('scripts1', ['clean'], function () {
//    return gulp.src(config.src)
//      .pipe(uglify())
//      .pipe(concat('all.min.js'))
//      .pipe(gulp.dest('./public/javascripts/app/'));
//});



//Set a default tasks
//gulp.task('default', ['scripts'], function () { });