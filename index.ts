import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import { oakCors } from 'https://deno.land/x/cors/mod.ts';

const router = new Router();
const app = new Application();
const contacts = [
  {
    name: "sam"
    pronouns: "He/Him"
  },
  {
    name: "sally"
    pronouns: "she/her"
  },

]
router.get('/', (context) => {
  context.response.body = 'This is an example Oak server running on Edge Functions!'
});


// app.use(async (ctx, next) => await routeMiddleware(ctx, next));
app.use(oakCors({ origin: '*', preflightContinue: true }));
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });

export default app;
