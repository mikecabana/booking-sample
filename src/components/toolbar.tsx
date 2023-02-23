import Link from "next/link";
import React from "react";
import AuthButton from "./auth-button";

const Toolbar: React.FC<{ children?: React.ReactNode }> = ({}) => {
  return (
    <div className="flex flex-row items-center px-8 py-4">
      <div className="flex-grow">
        <span className="text-xl font-semibold">Booking Sample</span>
        <Link href="/" className="mx-8 font-semibold hover:text-blue-700">Home</Link>
      </div>
      <div>
        <AuthButton />
      </div>
    </div>
  );
};

export default Toolbar;
