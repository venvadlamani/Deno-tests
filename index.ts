import { Application, Router } from 'oak';
import { oakCors } from 'cors';


const router = new Router();
const app = new Application();

app.use(async (ctx, next) => await routeMiddleware(ctx, next));

router
  .get("/contact", getAllContacts)

  
app.use(
  oakCors({ origin: "*", preflightContinue: true }),
);
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });

export default app;