import { GetServerSideProps, type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";
import Toolbar from "~/components/toolbar";
import BookingForm from "~/components/booking-form";

const NewBooking: NextPage<{ serviceId: string }> = ({ serviceId }) => {
  const serv = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Booking Sample</title>
        <meta
          name="description"
          content="A sample app demonstrating a basic booking system"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Toolbar />
      <main className="container mx-auto">
        <BookingForm serviceId={serviceId} />
      </main>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const serviceId = query.serviceId;
  return {
    props: { serviceId }, // will be passed to the page component as props
  };
};

export default NewBooking;
