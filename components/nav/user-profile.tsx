"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const UserProfile = () => {
  const session = useSession();
  const imageUrl = session?.data?.user?.image;
  const name = session?.data?.user?.name;
  const email = session?.data?.user?.email;

  return (
    <div className="flex items-center justify-start gap-1 lg:gap-2 m-0 p-0 lg:px-3 lg:w-full">
      {imageUrl && (
        <Image
          src={imageUrl}
          width={24}
          height={24}
          alt={`${name} profile picture}`}
          className="rounded-full"
        />
      )}
      <p className="truncate">{email}</p>
    </div>
  );
};

export default UserProfile;
