const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

gulp.task('styles', () => {
    return gulp.src('sass/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // compressed / compact / expanded / nested
        .pipe(gulp.dest('./css/'));
});

gulp.task('clean', () => {
    return del([
        'css/index.css',
    ]);
});

gulp.task('default', gulp.series(['clean', 'styles']));

gulp.task('watch', () => {
    gulp.watch('sass/**/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
});