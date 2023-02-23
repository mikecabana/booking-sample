import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const serviceRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.service.findMany();
  }),
  getOne: publicProcedure
    .input(
      z.object({
        serviceId: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.service.findFirst({ where: { id: input.serviceId } });
    }),
});
