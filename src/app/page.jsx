"use client";

import ChangeText from "@/components/changeText";
import ImageUpload from "@/components/imageUpload";
import Subscribers from "@/components/subscribers";

export default function Home() {
  return (
    <div className="">
      <h1 className="text-center mt-5 text-[#121417] text-4xl font-semibold">
        Admin Dashboard
      </h1>
      <ImageUpload />
      <ChangeText />
      <Subscribers />
    </div>
  );
}
