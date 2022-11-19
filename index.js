const Koa = require("Koa");
const bodyParser = require("koa-bodyparser");
const citizenRoutes = require("./routes/citizens.routes");
const port = 3001;

const app = new Koa();

app.use(bodyParser());

app.use(citizenRoutes.routes()).use(citizenRoutes.allowedMethods());

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

app.listen(port);
console.log("Application is running on http://localhost:" + port);
