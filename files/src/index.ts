import Koa from "koa";

const app = new Koa();

app.use(async (ctx, next) => {
  ctx.body = "Hello Koa";
  await next();
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`\nstart server: http://0.0.0.0:${port}`);
});
