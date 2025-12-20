import { createTRPCRouter } from '../init';
import { projectsRouter } from '@/modules/projects/server/procedures';
import { messageRouter } from '@/modules/messages/procedures';
import { usageRouter } from '@/modules/usage/server/procedures';

export const appRouter = createTRPCRouter({
  messages : messageRouter,
  projects: projectsRouter,
  usage: usageRouter
});
export type AppRouter = typeof appRouter;