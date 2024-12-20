import adminRouter from "~/server/api/routers/admin";
import leaderboardRouter from "~/server/api/routers/leaderboard";
import puzzleRouter from "~/server/api/routers/puzzle";
import submissionRouter from "~/server/api/routers/submission";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  admin: adminRouter,
  leaderboard: leaderboardRouter,
  puzzle: puzzleRouter,
  submission: submissionRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
