import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";
import Toolbar from "~/components/toolbar";
import Services from "~/components/services";
import Bookings from "~/components/bookings";

const Home: NextPage = () => {
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
        <div className="grid grid-cols-2 gap-10">
          <div>
            <Services />
          </div>
          <div>
            <Bookings />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
