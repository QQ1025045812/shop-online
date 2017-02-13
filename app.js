var express=require('express');
var app=express();
var partials=require('express-partials');
app.get('/',function(req,res){
    res.render("register");
});
app.set('view engine','html');
app.engine('.html',require('ejs').__express);//使用engine函数注册模板引擎并指定处理后缀名为html的文件
app.set('views',require('path').join(__dirname,'views'));//设定视图存放的目录
app.use(express.static(require('path').join(__dirname,'public')));//如果是在本地项目中，我们还要指定本地静态资源访问的路径
app.use(partials());
app.listen(8085);