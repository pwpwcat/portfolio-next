import gulp from "gulp";
import webp from "gulp-webp";

const path = {
  src: "./public/images/*.{jpg,jpeg,png}",
  dest: "./public/images/",
};

const convertImage = () => {
  return gulp
    .src(path.src)
    .pipe(
      webp({
        quality: 90,
      })
    )
    .pipe(gulp.dest(path.dest));
};

const watchFiles = () => {
  gulp.watch(path.src, gulp.parallel(convertImage));
};

export default gulp.series(convertImage, watchFiles);
