var gulp = require("gulp"),
    server = require("gulp-webserver");
gulp.task("server", function() {
   gulp.src("src")
           .pipe(server({
               port: 9090, //  端口号
               open: true, //自动打开浏览器
               livereload: true //自动刷新浏览器
               //middleware: function(req, res, next) { //拦截前端请求
                //   if (req.url === '/api/list') {
                //       res.end(JSON.stringify(list))
               //    }
               //   next()
               ///}
           }))
})