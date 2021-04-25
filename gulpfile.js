const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

//complie scss into css function
function style() {
  //1. scss file location
  return (
    gulp
      .src("./scss/**/*.scss")
      //2. pass file through sass complier
      .pipe(sass().on("error", sass.logError))
      //3. save complied CSS
      .pipe(gulp.dest("./css"))
      //4. stream changes to all browsers
      .pipe(browserSync.stream())
  );
}
//watch for changes and updates files for us
function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("./scss/**/*.scss", style); //watches styles
  gulp.watch("./*.html").on("change", browserSync.reload); //browers reload
  gulp.watch("./js/**/*.js").on("change", browserSync.reload); //watches js
}

exports.style = style;
exports.watch = watch;

//after setting up gulpfile, run ```gulp style``` in cli to check for
//errors - this creates project CSS project folder
//after setting up watch function, run ```gulp watch ```
