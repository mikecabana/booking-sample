import { useSession } from "next-auth/react";
import React from "react";

import { api } from "~/utils/api";

const Services = () => {
  const { data: sessionData } = useSession();

  const { data: services } = api.service.getAll.useQuery();
  return (
    <div>
      <div className="mb-4 font-bold">Services</div>

      {services &&
        services.map((service) => (
          <div
            key={service.id}
            className="group mb-2 flex flex-row justify-between rounded-xl px-4 py-2 last:mb-0 hover:bg-zinc-100"
          >
            <div>{service.name} <span className="bg-zinc-200 text-[10px] rounded-full px-2 py-[2px]">{service.duration} min</span></div>

            <button
              disabled={!sessionData}
              title={!sessionData ? "Sigh in to book" : ""}
              className={`hidden text-xs font-bold uppercase group-hover:block ${
                sessionData ? "text-sky-500 cursor-pointer" : ""
              }`}
            >
              book {!sessionData && <span className="cursor-help">⊛</span>}
            </button>
          </div>
        ))}
    </div>
  );
};

export default Services;
