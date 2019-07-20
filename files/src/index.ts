import Koa from "koa";

const app = new Koa();

app.use(ctx => {
  ctx.body = "Hello Koa";
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`\nserver: http://0.0.0.0:${port}`);
});
