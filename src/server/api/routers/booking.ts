import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const bookingRouter = createTRPCRouter({
  getUserBookings: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.booking.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),
});
