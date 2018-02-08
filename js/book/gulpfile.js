var gulp = require("gulp");
var sass = require('gulp-sass');
var cleancss = require('gulp-clean-css');
var autoprefixer = require("gulp-autoprefixer");
var notify  = require('gulp-notify');
var plumber = require("gulp-plumber");
var concat = require("gulp-concat");
var cssComb = require("gulp-csscomb");
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var uglify = require('gulp-uglify');
var cache = require('gulp-cached');
var changed = require('gulp-changed');
var watch = require('gulp-watch');
var stripDebug = require('gulp-strip-debug');
var sourcemaps = require('gulp-sourcemaps');
var spritesmith = require('gulp.spritesmith');

var $resouces_path = 'ab';
var $assets_path = 'a';

// sassコンパイルから出力まで
gulp.task('sass', function(){
    gulp.src($resouces_path + '/scss/**/*.scss')
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(sourcemaps.init())
        .pipe(sass({sourcemap: true}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.2']
        }))
        .pipe(sourcemaps.write('maps', {
                includeContent: false,
                sourceRoot: 'maps'
            })
        )
        // .pipe(concat('style.css'))
        .pipe(gulp.dest($resouces_path + '/css/'));
});

// sprite生成
gulp.task('sprite', function () {
    var spriteData = gulp.src($resouces_path + '/img/sprite/*.png')
    .pipe(plumber({
        errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: '_sprite.scss',
        imgPath: '/' + $assets_path + '/img/sprite.png',
        cssFormat: 'scss',
        padding  : 2,
        cssVarMap: function (sprite) {
            sprite.name = 'sprite-' + sprite.name;
        }
    }));
    spriteData.img.pipe(gulp.dest($resouces_path + '/img/')); // 生成するスプライト画像の保存場所
    spriteData.css.pipe(gulp.dest($resouces_path + '/scss/')); // 生成するsassの保存場所
});

gulp.task('css', function(){
    gulp.src($resouces_path + '/css/**/*.css')
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(cache('css-cache'))
        .pipe(cssComb())
        .pipe(cleancss())
        .pipe(gulp.dest($assets_path + '/css/'));
});

// js 結合・圧縮
gulp.task('js', function() {
    gulp.src($resouces_path + '/js/src/*.js')
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(concat('script.js'))
        .pipe(cache('js'))
        .pipe(gulp.dest($resouces_path + '/js/'))
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest($assets_path + '/js/'));
});

// jpg 圧縮
gulp.task('jpgmin', function(){
    var imageminOptions = {
        optimizationLevel: 7
    };
    gulp.src($resouces_path + '/img/**/*.+(jpg|svg)')
        .pipe(plumber({
                errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(changed($assets_path + '/img/'))
        .pipe(imagemin(imageminOptions))
        .pipe(gulp.dest($assets_path + '/img/'));
});

// png 圧縮
gulp.task('pngmin', function(){
    gulp.src($resouces_path + '/img/**/*.png')
        .pipe(plumber({
                errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(changed($assets_path + '/img/'))
        .pipe(imagemin(
            [pngquant({quality: '65-80', speed: 1})]
        ))
        .pipe(gulp.dest($assets_path + '/img/'));
});

gulp.task('default', function() {
    watch([$resouces_path + '/scss/**/*.scss'], function(event){
        gulp.start(['sass']);
    });
    watch([$resouces_path + '/img/sprite/*.png'], function(event){
        gulp.start(['sprite']);
    });
    watch([$resouces_path + '/css/**/*.css'], function(event){
        gulp.start(['css']);
    });
    watch([$resouces_path + '/img/**/*.+(jpg|svg)'], function(event){
        gulp.start(['jpgmin']);
    });
    watch([$resouces_path + '/img/**/*.png'], function(event){
        gulp.start(['pngmin']);
    });
    watch([$resouces_path + '/js/src/*.js'], function(event){
        gulp.start(['js']);
    });
});
