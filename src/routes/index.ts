import Router from "@koa/router";

export const register = (router: Router) => {
  router.get("/", async (ctx) => {
    ctx.body = "index";
  });
};
