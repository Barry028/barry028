const gulp = require('gulp');

const uglify = require('gulp-uglify');
const nodemon = require('gulp-nodemon');
// 合併檔案
const concat = require('gulp-concat');
// Sass
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
// const  autoprefixer = require('gulp-autoprefixer');
const autoprefixer = require('autoprefixer');

const cssnano = require('cssnano');

// 圖片壓縮
const gulpImagemin = require('gulp-imagemin');
// const browserSync = require("browser-sync").create();

// gulp.task('img', () => {
//     return gulp
//         .src('html/images/**')
//         .pipe(gulpImagemin())
//         .pipe(gulp.dest('html/dist/img/'));
// });

// 將編譯器調整為 Dart Sass
// sass.compiler = require('dart-sass');

// Sass 編譯
gulp.task('concat', () => {
    return gulp
        .src('assets/plugins/js/*.js')
        .pipe(concat('main.js'))
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(gulp.dest('assets/plugins/js/dist'))
});


// Sass 編譯
gulp.task('sass', () => {
    return gulp
        .src('/scss/*.scss')
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(sass({
                outputStyle: 'expanded'
            })
            .on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        // .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.', {
            sourceRoot: '../scss/'
            // 寫入Sourcemaps 到當前資料夾(以下下列 dest('assets/css')為基準點，
            // SourceRoot：以匯出的資料夾為基準點找他原本的scss資料夾位置。
        }))
        .pipe(gulp.dest('/css'))
});
gulp.task('watch', () => {
    gulp.watch('assets/css/*.scss', gulp.series('sass'));
});












