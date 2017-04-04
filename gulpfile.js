var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

var input = './scss/*.scss';
var output = './css';


// ... variables
var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

var sassOptions = {
	errLogToConsole: true,
	outputStyle: 'expanded' /* nested, expanded, compact, compressed */
};

gulp.task('sass', function() {
	return gulp
		.src(input)
		.pipe(sourcemaps.init())
		.pipe(sass(sassOptions).on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(autoprefixer(autoprefixerOptions))
		.pipe(gulp.dest(output));
});

gulp.task('bootstrap', function() {
	return gulp
		.src('bower_components/bootstrap-sass/assets/stylesheets/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass(sassOptions).on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(autoprefixer(autoprefixerOptions))
		.pipe(gulp.dest(output));
});

gulp.task('watch', function() {
	return gulp
		.watch([input, './scss/includes/*.scss'], ['sass'])
		.on('change', function(event) {
			console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
		});
});

gulp.task('default', ['sass', 'watch']);