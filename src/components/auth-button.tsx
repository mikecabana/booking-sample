import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { api } from "~/utils/api";

const AuthButton = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <button
      className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-bold uppercase hover:bg-zinc-300"
      onClick={sessionData ? () => void signOut() : () => void signIn("google")}
    >
      {sessionData ? "sign out" : "sign in"}
    </button>
  );
};

export default AuthButton;
