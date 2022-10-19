import Koa from "koa";
import logger from "koa-logger";

import { router } from "./router";

const app = new Koa();

app.use(logger());
app.use(router.routes());
app.use(router.allowedMethods());

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`>> Server: http://0.0.0.0:${port}`);
});
