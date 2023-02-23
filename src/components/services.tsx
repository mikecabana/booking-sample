import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

import { api } from "~/utils/api";

const Services = () => {
  const { data: sessionData } = useSession();

  const { data: services, isLoading } = api.service.getAll.useQuery();

  if (isLoading) {
    return (
      <>
        <div className="mb-4 font-bold">Services</div>
        Loading
      </>
    );
  }

  return (
    <div>
      <div className="mb-4 font-bold">Services</div>

      {services &&
        services.map((service) => (
          <div
            key={service.id}
            className="group mb-2 flex flex-row items-center justify-between rounded-xl px-4 py-2 last:mb-0 hover:bg-zinc-100"
          >
            <div className="flex-grow">
              {service.name}{" "}
              <span className="rounded-full bg-zinc-200 px-2 py-[2px] text-[10px]">
                {service.duration} min
              </span>
            </div>

            {sessionData ? (
              <Link
                href={`/booking/${service.id}/new`}
                className="hidden cursor-pointer text-xs font-semibold uppercase text-blue-500 hover:text-blue-700 group-hover:block"
              >
                book
              </Link>
            ) : (
              <>
                <button
                  disabled
                  className="hidden text-xs font-semibold uppercase group-hover:block"
                >
                  book
                </button>
                <span className="ml-1 cursor-help hidden group-hover:block text-xs" title="Sigh in to book">
                  ⊛
                </span>
              </>
            )}
          </div>
        ))}
    </div>
  );
};

export default Services;
