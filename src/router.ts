import Router from "@koa/router";

const router = new Router();

require("./routes/index").register(router);

export { router };
