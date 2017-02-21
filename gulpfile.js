var gulp = require('gulp');
var shell = require('gulp-shell');
var install = require("gulp-install");


gulp.task('default', function() {
    gulp.src(['app/package.json'])
        .pipe(install());
});

gulp.task('build-dev', shell.task(
    'docker build -t wif/dev .'
));

gulp.task('watch', shell.task([
    'docker rm -f dev',
    'docker run -d'
        + ' --name dev'
        + ' -v $PWD/app:/usr/src/app'
        + ' -w /usr/src/app'
        + ' -p 3000:3000'
        + ' wif/dev',
    'xdg-open http://localhost:3000/map.html'],
    { verbose: true, ignoreErrors: true }
));