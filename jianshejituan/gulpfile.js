var gulp = require('gulp');
var connect = require('gulp-connect');
//启动服务器
gulp.task('connect',function(){
	connect.server({
		port:'8080',
		root:'./'
	})
});
// 自动补全css前缀
// var autoprefixer = require('gulp-autoprefixer');
// gulp.task('auto', function (){
//     gulp.src('css/*.css')
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions', 'Android >= 4.0'],
//             cascade: true
//         }))
//         .pipe(gulp.dest('dist/css'));
// });
