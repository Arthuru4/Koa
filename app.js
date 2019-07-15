const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    console.log('afasfafs');
    next()
});
app.use(async (ctx, next) => {
    ctx.body = 'Hello world!';
    console.log('Hello world!');
});

app.listen(8070, () => {
    console.log('http://localhost:8070')
});