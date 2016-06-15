// generated on 2015-06-15 using generator-gulp-webapp 1.0.0
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';

import {
    stream as wiredep
}
from 'wiredep';
/* use ./node_modules/babel-cli/bin/babel.js babel_gulpfile.babel.js > gulpfile.js */ 
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
function swallowError (error) {

    // If you want details of the error in the console
    console.log(error.toString())

    // this.emit('end')
}
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
gulp.task('html', ['styles', 'copyGoogle'], () => {
    const assets = $.useref.assets({
        searchPath: ['.tmp', 'app', '.']
    });
    return gulp.src(['app/*.html', '!app/google9fd3a51767af392b.html']).pipe($.inlineSource()).pipe(assets).pipe($.if('*.js', $.uglify())).pipe($.if('*.css', $.cleanCss({
        compatibility: '*'
    }))).pipe(assets.restore()).pipe($.useref()).pipe($.if('*.html', $.minifyHtml({
        conditionals: true,
        loose: true
    }))).pipe(gulp.dest('dist'));
});
gulp.task('copyGoogle', () => {

    return gulp.src("app/google9fd3a51767af392b.html").pipe(gulp.dest('dist'))
})
gulp.task('resizeGallery', () => {
    console.log("Run batchcrop.js and make sure no sideways/etc pictures")
    // return
    // // return gulp.src('batchcrop.js').pipe($.util.log("Run batchcrop.js and make sure no sideways/etc pictures"))
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
    var path = 'app/images/*'
    var args = process.argv
console.log(args)
console.log(args.length)
    if (args.length > 3) {
        console.log("HAS EXTRA ARGS" + args)
            //removes first 3 from ie [ 'node', 'path/to/gulp.js', '--option', '123' ]
        args = args.splice(3)
        path = []
        for (var i in args) {
            path.push("app/images/" + args[i].replace(/\-/g, ""))

        }
        //changes ending comma to ending bracket
    }
    return gulp.src(path).pipe($.responsive({
        //for documents, after remove all surrounding whitespace, run `montage null: Constit.png -tile 2x1 -geometry +3+0 out2.png` to add the right amount of whitespace so it doesn't go over edge
        '{Laurel.jpg,Watch.jpg,Help.jpg,Nervs.jpg,NationalConvention0021.jpg,NationalConvention0007.jpg,dropboxLogo.jpg,twitterLogo.png,instagramLogo.jpg,facebookLogo.png,envelopeLogo.jpg,MagistraKunzConvention_0005.jpg,Dulanium*,EleanorCertamen1.jpg,pastOfficers*,SaturnaliaCertamen*,Oct31*,Convention_Dulaney_1831.jpg,MagistraKunzConvention_finalcertamen2.jpg,MagistraKunzConvention_gladiator4.jpg,MagistraKunzConvention_talentshow3.jpg,Convention_Dulaney_1674.jpg,MagistraKunzConvention_0072.jpg,MagistraKunzConvention_0215.jpg,MagistraKunzConvention_0268.jpg,MagistraKunzConvention_0369.jpg,MagistraKunzConvention_0151.jpg,MagistraKunzConvention_Greekdancing.png,pegaFrog2.jpg,pegaFrog3.jpg,eastonVA.jpg,eastonVA2.jpg,Dulaney_movie1.jpg,Dulaney_movie3.jpg,Dulaney_movie4.jpg,Dulaney_gladiator1.jpg,Dulaney_gladiator2.jpg,Dulaney_gladiator3.jpg,Dulaney_gladiator4.jpg,Dulaney_gladiator5.jpg,Dulaney_gladiator6.jpg,Dulaney_gladiator7.jpg,Dulaney_gladiator8.jpg,Dulaney_gladiator10.jpg,Dulaney_gladiator11.jpg,MuseumVisit4.jpg,MuseumVisit5.jpg,MuseumVisit6.jpg,MuseumVisit0.jpg,MuseumVisit4.jpg,MuseumVisit8.jpg,NewConvention1.jpg,NewConvention3.jpg,overallForm.jpg}': {
            //for 4/12
            width: 430,
            height: 287,
            rename: {
                suffix: "-resized"
            },
            withoutEnlargement: false
        },
        '{NJCL_smaller.jpg,Exercise.jpg,Stand.jpg,peepcontest2.png,NationalConvention0004.jpg,ContactUs.png,MainDulanium.jpg,EleanorCertamen2.jpg,MagistraKunzConvention_0353.jpg,pegaFrogOriginal.jpg,pegaFrog1.jpg,eastonVA3.jpg,Dulaney_movie2.jpg,Dulaney_gladiator9.jpg,MuseumVisit1.jpg,NewConvention2.jpg,MagistraKunzConvention_0152.jpg}': {
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
        '{confused*,Jonah.jpg,EllaJoshi.jpg,MsKunzResized.jpg,Liz.jpg,EllieResized.jpg,Edmund.jpg,Katie.jpg,JonahPlant.jpg,MsKunz2Resized.jpg,MsKunz3Resized.jpg,MsKunz4Resized.jpg,Liz2.jpg,Liz2Resized.jpg,Ellie2.jpg,Ellie2Resized.jpg,RomanWantsYou.jpg,samWants.jpg,linganore.jpg,pastOfficers*,EastonBakeSale*,EastonAdoptFamily.jpg,EastonGeneral.jpg,POTUS.jpg,VPOTUS.jpg,lawLogo.png,editorLogo.jpg,webmasterLogo.jpg}': {
            //for stricter 6/12
            width: 654,
            height: 437,
            rename: {
                suffix: "-resized"
            },
            withoutEnlargement: false
        },
        '{Registration.png,Constit.png,PurpleGold.jpg,Creed.jpg,coliseum.png,questionMarks.jpg,questionMarks.jpg,PastTorch*,moreComing.jpg,museum.jpg,spellingBee.jpg,certamen.jpg,Minotaur404.jpg,LHHomeless.jpg,olimPaper.jpg,tShirtTorso.jpg,tShirtTorsoSmaller.jpg,2015_Fall_Torch.jpg,MuseumDay.jpg,2015_Winter_Torch.jpg,MDJCLPin.png,ERHS_Spelling.jpg,convention2016.jpg,allT.jpg,SpringTorch.jpg,editorLogoResized.jpg,ConventionTorch.jpg,congrats.jpg,Meeting*.jpg}': {
            width: "100%",
            height: "100%",
            rename: {
                suffix: "-resized"
            }
        },
        '{easton.jpg,dulaney.jpg,countrySchool.jpg,loyola.jpg,eleanor.jpg,EastonParty.jpg}': {
            width: "654",
            height: "100%",
            rename: {
                suffix: "-resized"
            },
            withoutEnlargement: false
        }
    }, {
        errorOnUnusedImage: false,
        errorOnUnusedConfig: false
    })).pipe(gulp.dest('app/images/resized'))
})
gulp.task('deploy', function() {
    //build needs to be already done
    return gulp.src("./dist/**/*").pipe($.ghPages({
        "branch": "master",
        "remoteUrl": "https://github.com/MDJCL/MDJCL.github.io.git"
    }))
});
gulp.task('spellcheck', function() {
    // throw "didn't work"
    return gulp.src('app/index.html')
        // .pipe($.util.log("aspell check -H /home/jonah/Dropbox/Public/MDJCL/yeoman/index.html"))
        .pipe($.spellcheck({
            "stdout": true,
            "mode": "html",
            "ignore": ["Linganore", "Ballenger", "th", "linganorelatin", "Dulanium", "Padonia", "linganorelatin","Padonia","Goldsborough","pegafrog", "ientaculum", "USD", "Chaperone", "Marsandi", "Zhao","nd","MDJCL","Baucis","CAPTCHAs","Capuano","certamina","cetera","Disney's","Dulaney","Easton","et","Inna","Instagram","JCL","Joshi","jpg","Kilmon","Kunz","Langlieb","Lutherville","Magistra","MarylandJCL","MDJCL's","NJCL","NJCL's","Obeng","Omnes","Ovid's","png","Salvete","Selene","Timonium","Toth"]
        }))
        // .pipe($.util.log())
        .on('error', swallowError)
        .pipe($.prompt.confirm({
            message: 'Continue? If not aspell check -H /home/jonah/Dropbox/Public/MDJCL/app/index.html',
            default: true
        }))
        // .pipe(gulp.dest('app'));
});
gulp.task('images', ['resize'], () => {
    console.log("If only wanted specific images/globs, pass in '--GLOB/NAME HERE'")
    var path = 'app/images/resized/**/*'
    var args = process.argv

    if (args.length > 3) {
        console.log("HAS EXTRA ARGS" + args)
            //removes first 3 from ie [ 'node', 'path/to/gulp.js', '--option', '123' ]
        args = args.splice(3)
        path = []
        for (var i in args) {
            path.push("app/images/resized/" + args[i].replace(/\-/g, ""))

        }
        //changes ending comma to ending bracket
    }
    return gulp.src(path).pipe($.if($.if.isFile, $.cache($.imagemin({
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
gulp.task('serve', ['styles', 'fonts'], () => {
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
//tdd
// gulp.task('build', ['html',  'fonts', 'extras'], (cb) => {
    gulp.src('dist/**/*').pipe($.size({
        title: 'build',
        gzip: true
    }));
    cb("")
});

gulp.task('validateHTML', () => {
// console.log("If have errors, run ':make' on the html in VIM and use ':cn for next'")
return gulp.src('app/index.html')
	      .pipe($.htmlhint(".htmlhintrc"))
	      .pipe($.htmlhint.reporter())
});

gulp.task('noCritical', (callback) => {
    // runSequence(['clean', 'spellcheck'], 'docs', 'build',  'deploy', callback);
    runSequence(['clean', 'spellcheck', 'lint', "validateHTML"], 'docs', 'build', 'sitemap', callback);
});
gulp.task('default', function(callback) {
    // runSequence(['clean', 'spellcheck'], 'docs', 'build', 'critical', 'deploy', callback);
    console.log("gulp deploy")
    console.log("eslint /home/jonah/Dropbox/Public/MDJCL/app/scripts/main.js ")
    console.log("aspell check -H /home/jonah/Dropbox/Public/MDJCL/app/index.html")
    // runSequence(['clean', 'spellcheck', "lint","validateHTML"], 'docs', 'build', 'sitemap', 'critical', callback);
    runSequence(['clean', "spellcheck", "lint","validateHTML"], 'docs', 'build', 'sitemap', callback);
});
gulp.task('sitemap', function() {
    return gulp.src(['dist/index.html', 'dist/Docs/*'])
        .pipe($.sitemap({
            siteUrl: 'https://mdjcl.github.io',
            changefreq: "weekly",
            // pages: ["*"],
            verbose: true
        }))
        .pipe(gulp.dest('./dist'));

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
            ignore: ['@font-face', '.btn']
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


gulp.task("checkDev",  function(callback) {
console.log("HAVING gulp.serve RUNNING")
console.log("RUN gulp checkDev 2>&1 >/dev/null")
  var options = {
    pageUrls: [
      'http://localhost:9000/'
    ],
    checkLinks: true,
    // onlySameDomain: true,
    // queryHashes: true,
    // noRedirects: true,
    // noLocalLinks: true
    // noEmptyFragments: true,
    linksToIgnore: [
      'http://localhost:9000/#'
    ],
    // checkXhtml: true,
    // checkCaching: true,
    // checkCompression: true,
    // maxResponseTime: 200,
    // userAgent: 'custom-user-agent/1.2.3',
    // summary: true
  };
  require("check-pages")(console, options, function(err, b, c){
  
  console.log("ERRROR: ")
        console.log(err)
        console.log("----")
        console.log(b)
        console.log("----")
        console.log(c)
  });
});
