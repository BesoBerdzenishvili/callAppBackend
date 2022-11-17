const Router = require("@koa/router");
const {
  createCitizen,
  getCitizen,
  getCitizens,
  updateCitizen,
  deleteCitizen,
} = require("../api/citizens.api");

const router = new Router({
  prefix: "/citizens",
});

router.get("/", async (ctx) => {
  ctx.body = await getCitizens();
});

router.post("/", async (ctx) => {
  let citizen = ctx.request.body;
  citizen = await createCitizen(citizen);

  ctx.response.status = 200;
  ctx.body = citizen;
});

router.get("/:id", async (ctx) => {
  const id = ctx.params.id;
  ctx.body = await getCitizen(id);
});

router.delete("/:id", async (ctx) => {
  const id = ctx.params.id;
  await deleteCitizen(id);
});

router.put("/:id", async (ctx) => {
  const id = ctx.params.id;
  let citizen = ctx.request.body;
  citizen = await updateCitizen(id, citizen);
  ctx.response.status = 200;
  ctx.body = citizen;
});
module.exports = router;
