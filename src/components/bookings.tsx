import { useSession } from "next-auth/react";
import React from "react";

import { api } from "~/utils/api";

const Bookings = () => {
  const { data: sessionData } = useSession();

  const { data: bookings, isLoading } = api.booking.getUserBookings.useQuery();

  if (isLoading) {
    return (
      <>
        <div className="mb-4 font-bold">Bookings</div>
        Loading
      </>
    );
  }

  if (!sessionData) {
    return (
      <>
        <div className="mb-4 font-bold">Bookings</div>
        Sign in to see your bookings.
      </>
    );
  }

  if (bookings && bookings.length <= 0) {
    return (
      <>
        <div className="mb-4 font-bold">Bookings</div>
        No bookings.
      </>
    );
  }
  return (
    <div>
      <div className="mb-4 font-bold">Bookings</div>

      {bookings &&
        bookings.map((booking) => (
          <div
            key={booking.id}
            className="group mb-4 flex flex-row justify-between rounded-xl px-4 py-2 last:mb-0 hover:bg-zinc-100"
          >
            <div>{booking.id}</div>

            <button
              disabled={!sessionData}
              title={!sessionData ? "Sigh in to book" : ""}
              className={`hidden text-xs uppercase group-hover:block ${
                sessionData ? "text-blue cursor-pointer" : ""
              }`}
            >
              book {!sessionData && <span className="cursor-help">⊛</span>}
            </button>
          </div>
        ))}
    </div>
  );
};

export default Bookings;
