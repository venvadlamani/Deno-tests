import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import { oakCors } from 'https://deno.land/x/cors/mod.ts';

const router = new Router();
const app = new Application();
const contacts = [
  {
    name: "venkatesh"
    pronouns: "He/Him"
  },
  {
    name: "smita"
    pronouns: "she/her"
  },

]
app.use(async (ctx, next) => await routeMiddleware(ctx, next));

router.get('/contact', contacts);

app.use(oakCors({ origin: '*', preflightContinue: true }));
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });

export default app;
