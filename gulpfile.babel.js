// generated on 2015-06-15 using generator-gulp-webapp 1.0.0
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';

import {
    stream as wiredep
}
from 'wiredep';
const $ = gulpLoadPlugins();
const reload = browserSync.reload;
const runSequence = require("run-sequence")
gulp.task('styles', () => {
    return gulp.src('app/styles/*.css').pipe($.sourcemaps.init()).pipe($.autoprefixer({
        browsers: ['> 5% in US', 'last 1 version']
    })).pipe($.sourcemaps.write()).pipe(gulp.dest('.tmp/styles')).pipe(reload({
        stream: true
    }));
});

function lint(files) {
// console.log("if want to run eslint /home/jonah/Dropbox/Public/MDJCL/yeoman/app/scripts/main.js ")
    return () => {
        return gulp.src(files).pipe(reload({
            stream: true,
            once: true
        })).pipe($.eslint()).pipe($.eslint.format()).pipe($.if(!browserSync.active, $.eslint.failAfterError()))

    };
}
gulp.task('lint', lint('app/scripts/**/*.js'));
gulp.task('lint:test', lint('test/spec/**/*.js'));
gulp.task('html', ['styles'], () => {
    const assets = $.useref.assets({
        searchPath: ['.tmp', 'app', '.']
    });
    return gulp.src('app/*.html').pipe($.inlineSource()).pipe(assets).pipe($.if('*.js', $.uglify())).pipe($.if('*.css', $.minifyCss({
        compatibility: '*'
    }))).pipe(assets.restore()).pipe($.useref()).pipe($.if('*.html', $.minifyHtml({
        conditionals: true,
        loose: true
    }))).pipe(gulp.dest('dist'));
});
gulp.task('resizeGallery', () => {
    return gulp.src('app/images/miscGallery/*').pipe($.responsive({
        '*': {
            // width: 434,
            // height: 290,
            width: 651,
            height: 435,
            rename: {
                suffix: "-resized"
            },
            withoutEnlargement: false
        }
    }, {
        errorOnUnusedImage: false
    })).pipe(gulp.dest('app/images/resized/miscGallery'))
})

gulp.task('resize', () => {
    return gulp.src('app/images/*').pipe($.responsive({
    //for documents, after remove all surrounding whitespace, run `montage null: Constit.png -tile 2x1 -geometry +3+0 out2.png` to add the right amount of whitespace so it doesn't go over edge
        '{Laurel.jpg,Watch.jpg,Help.jpg,Nervs.jpg,NationalConvention0021.jpg,NationalConvention0007.jpg,dropboxLogo.jpg,twitterLogo.png,instagramLogo.jpg,facebookLogo.png,envelopeLogo.jpg}': {
            //for 4/12
            width: 430,
            height: 287,
            rename: {
                suffix: "-resized"
            },
            withoutEnlargement:false
        },
        '{NJCL_smaller.jpg,Exercise.jpg,Stand.jpg,peepcontest2.png,NationalConvention0004.jpg,ContactUs.png}': {
            //for 8/12 sized
            width: 873,
            height: 580,
            rename: {
                suffix: "-resized"
            },
            withoutEnlargement: false
        },
        '{Chariot.jpg,}': {
            //for 3/12
            width: 325,
            height: 433,
            rename: {
                suffix: "-resized"
            }
        },
        '{OfficerElection.png,ConventionSchedule.png,Vulpes.png}': {
            //for 6/12
            width: "100%",
            height: 522,
            rename: {
                suffix: "-resized"
            },
            withoutEnlargement: false
        },
        '{Confusion*,Jonah.jpg,EllaJoshi.jpg,MsKunzResized.jpg,Liz.jpg,EllieResized.jpg,Edmund.jpg,Katie.jpg,JonahPlant.jpg,MsKunz2Resized.jpg,MsKunz3Resized.jpg,MsKunz4Resized.jpg,Liz2.jpg,Liz2Resized.jpg,Ellie2.jpg,Ellie2Resized.jpg,RomanWantsYou.jpg,samWants.jpg}': {
            //for stricter 6/12
            width: 654,
            height: 437,
            rename: {
                suffix: "-resized"
            },
            withoutEnlargement: false
        },
        '{Registration.png,Constit.png,PurpleGold.jpg,Creed.jpg,coliseum.png,questionMarks.jpg,questionMarks.jpg,PastTorch*,moreComing.jpg,museum.jpg,spellingBee.jpg,certamen.jpg}': {
            width: "100%",
            height: "100%",
            rename: {
                suffix: "-resized"
            }
        },
        '{easton.jpg,dulaney.JPG,countrySchool.jpg,loyola.jpg,eleanor.jpg}': {
            width: "654",
            height: "100%",
            rename: {
                suffix: "-resized"
            },
            withoutEnlargement: false
        }
    }, {
        errorOnUnusedImage: false
    })).pipe(gulp.dest('app/images/resized'))
})
gulp.task('deploy', function() {
    //build needs to be already done
    return gulp.src("./dist/**/*").pipe($.ghPages({
            branch: "master"
    }))
});
gulp.task('spellcheck', function() {
    // throw "didn't work"
    return gulp.src('app/index.html')
        // .pipe($.util.log("aspell check -H /home/jonah/Dropbox/Public/MDJCL/yeoman/index.html"))
        .pipe($.spellcheck({
            "stdout": true,
            "mode": "html",
            "ignore": ["Linganore", "Ballenger", "th"]
        }))
        // .pipe($.util.log())
        .pipe($.prompt.confirm({
            message: 'Continue? If not aspell check -H /home/jonah/Dropbox/Public/MDJCL/yeoman/app/index.html',
            default: true
        }))
        // .pipe(gulp.dest('app'));
});
gulp.task('images', ['resize'], () => {
    return gulp.src('app/images/resized/**/*').pipe($.if($.if.isFile, $.cache($.imagemin({
            progressive: true,
            interlaced: true,
            // don't remove IDs from SVGs, they are often used
            // as hooks for embedding and styling
            svgoPlugins: [{
                cleanupIDs: false
            }]
        })))
        .on('error', function(err) {
            console.log(err);
            this.end();
        })).pipe(gulp.dest('dist/images/resized'));
});
gulp.task('clear', function(done) {
    return $.cache.clearAll(done);
});
gulp.task('docs', () => {
    return gulp.src('app/Docs/**/*').pipe(gulp.dest('dist/Docs'))
})

gulp.task('fonts', () => {
    return gulp.src(require('main-bower-files')({
        filter: '**/*.{eot,svg,ttf,woff,woff2}'
    }).concat('app/fonts/**/*')).pipe(gulp.dest('.tmp/fonts')).pipe(gulp.dest('dist/fonts'));
});
gulp.task('extras', () => {
    return gulp.src(['app/*.*', '!app/*.html'], {
        dot: true
    }).pipe(gulp.dest('dist'));
});
gulp.task('clean', del.bind(null, ['.tmp', 'dist']));
gulp.task('serve', ['styles', 'fonts', 'images'], () => {
    browserSync({
        notify: false,
        port: 9000,
        server: {
            baseDir: ['.tmp', 'app'],
            routes: {
                '/bower_components': 'bower_components'
            }
        }
    });
    gulp.watch(['app/*.html', 'app/scripts/**/*.js', '.tmp/fonts/**/*']).on('change', reload);
    //jonah
    // gulp.watch('app/images/*', ['images']);
    //end jonah
    gulp.watch('app/styles/**/*.css', {
        debounceDelay: 2000
    }, ['styles']);
    gulp.watch('app/fonts/**/*', ['fonts']);
    gulp.watch('bower.json', ['wiredep', 'fonts']);
});
gulp.task('serve:dist', () => {
    browserSync({
        notify: false,
        port: 9000,
        server: {
            baseDir: ['dist']
        }
    });
});
// gulp.task('googleCDN', () => {
//      return gulp.src('index.html')
//         .pipe(gulp.dest('dist'));
// });
gulp.task('serve:test', () => {
    browserSync({
        notify: false,
        open: false,
        port: 9000,
        ui: false,
        server: {
            baseDir: 'test'
        }
    });
    gulp.watch('test/spec/**/*.js').on('change', reload);
    gulp.watch('test/spec/**/*.js', ['lint:test']);
});
// inject bower components
gulp.task('wiredep', () => {
    gulp.src('app/*.html').pipe(wiredep({
        exclude: ['bootstrap.js'],
        ignorePath: /^(\.\.\/)*\.\./
    })).pipe(gulp.dest('app'));
});
gulp.task('build', ['html', 'images', 'fonts', 'extras'], (cb) => {
    gulp.src('dist/**/*').pipe($.size({
        title: 'build',
        gzip: true
    }));
    cb("")
});
gulp.task('noCritical', (callback) => {
    // runSequence(['clean', 'spellcheck'], 'docs', 'build',  'deploy', callback);
    runSequence(['clean', 'spellcheck', 'lint'], 'docs', 'build', callback);
});
gulp.task('default', function(callback) {
    // runSequence(['clean', 'spellcheck'], 'docs', 'build', 'critical', 'deploy', callback);
console.log("gulp deploy")
console.log("eslint /home/jonah/Dropbox/Public/MDJCL/yeoman/app/scripts/main.js ")
console.log("aspell check -H /home/jonah/Dropbox/Public/MDJCL/yeoman/app/index.html")
    runSequence(['clean', 'spellcheck', "lint"], 'docs', 'build', 'critical', callback);
});
gulp.task('copystyles', function() {
    return gulp.src(['dist/styles/main.css']).pipe($.rename({
        basename: "site" // site.css
    })).pipe(gulp.dest('dist/styles'));
});
gulp.task('critical', ['copystyles'], function(cb) {

    return gulp.src('dist/*.html')
        .pipe(require('critical').stream({
            // Inline the generated critical-path CSS
            // - true generates HTML
            // - false generates CSS
            inline: true,


            // Your base directory
            base: 'dist/',

            // HTML source

            // HTML source file
            // src: 'index.html',

            // Target for final HTML output.
            // use some css file when the inline option is not set
            // dest: 'index-critical.html',

            // // Minify critical-path CSS when inlining
            minify: true,

            // // Extract inlined styles from referenced stylesheets
            extract: true,

            // Prefix for asset directory

            // ignore css rules
            ignore: ['@font-face']
        })).pipe(gulp.dest('dist'));

    // critical.generateInline({
    //     inline: true,
    //     base: 'dist/',
    //     src: 'index.html',
    //     // htmlTarget: 'index.html',
    //     dest: 'index-critical.html',
    //     minify: true,
    //     width: 1300,
    //     height: 900,
    //      ignore: ['@font-face', /url\(/,/SIFONN_BASIC/g, 'font', /font/, /font/g, /@font-face/g]
    // }, cb.bind(cb));
});
