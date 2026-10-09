import { src,dest,watch, series} from "gulp"
import * as dartSass from "sass"
import gulpSass from "gulp-sass"

const sass = gulpSass(dartSass)

export function js(done){
    src("img/js/app.js")
    .pipe(dest("build/js"))
    done()
}

export function css(done) {
   src("img/scss/app.scss")
    .pipe( sass().on('error',sass.logError) )
    .pipe( dest ("build/css"))

    done()
}
 export function dev() {
    watch("img/scss/**/*.scss",css)
    watch("img/js/**/*.js",js)
}

export default series(css,js,dev)