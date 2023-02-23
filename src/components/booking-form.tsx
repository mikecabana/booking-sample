import React from "react";
import { api } from "~/utils/api";

const BookingForm: React.FC<{ serviceId: string }> = ({ serviceId }) => {
  const { data: service, isLoading } = api.service.getOne.useQuery({
    serviceId,
  });
  const fields = [
    {
      type: "text",
      label: "Full Name",
    },
    {
      type: "email",
      label: "Email",
    },
    {
      type: "phone",
      label: "Phone",
    },
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="mb-4 text-lg font-semibold">
        {service?.name}{" "}
        <span className="rounded-full bg-zinc-200 px-2 py-[2px] text-xs">
          {service?.duration} min
        </span>
      </div>
      <form>
        {fields.map((field) => (
          <label key={field.type} className="block">
            <div className="text-sm text-zinc-800">{field.label}</div>
            <input
              type={field.type}
              className="my-1 block w-full rounded-md border-transparent bg-gray-100 p-2 focus:border-gray-500 focus:bg-white focus:ring-0"
            />
          </label>
        ))}
      </form>
    </>
  );
  // todo: create the booking form
};

export default BookingForm;
