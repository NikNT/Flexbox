var gulp = require('gulp'); 
var autoprefixer = require('gulp-autoprefixer'); 

gulp.task('style', () =>
    gulp.src('style.css')
        .pipe(autoprefixer({
            cascade: false
    }))
    .pipe(gulp.dest('build'))
);

gulp.task('watch', ()=>{
  gulp.watch('./style.css', ['style']); 
}); 