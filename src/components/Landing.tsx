import React from "react";
import Button from "@mui/material/Button";

export default function Landing() {
  return (
    <div className="mx-auto flex 3xl:w-6/12 lg:w-11/12 items-center justify-between p-6 lg:px-8 h-screen w-screen">
      <div className="absolute w-screen h-screen left-0 top-0 triangle-svg -z-10" />
      <div className="absolute w-screen h-screen left-0 top-0 triangle-svg-diamond -z-10 hidden lg:block" />
      <div className="absolute w-screen h-screen left-0 top-0 triangle-svg-diamond-reverse -z-10 hidden lg:block" />
      {/* <div className="absolute w-screen h-screen left-0 top-0 triangle-svg-projects -z-10 hidden lg:block" /> */}
      <div className="absolute w-screen h-48 bg-gradient-to-b from-transparent to-black bottom-0 left-1/2 transform -translate-x-1/2" />
      {/* <div className="absolute w-screen h-48 bg-gradient-to-t from-transparent to-black top-0 left-1/2 transform -translate-x-1/2" /> */}
      <div className="flex mr-auto">
        <div className="w-full">
          <div className="text-left text-3xl lg:text-6xl ">Welcome to</div>
          <div className="text-left text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-emerald-600">
            CRYPTECH SERVICES
          </div>
          <div className="text-left text-lg lg:text-3xl mt-2">
            Unlocking Tomorrow&apos;s Digital Fronteir with Cryptech Services:
            &nbsp;
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-emerald-600">
              Your Vision, Our Expertise.
            </span>
          </div>
          <div className="lg:flex lg:flex-1 lg:justify-start mt-4">
            <Button
              variant="contained"
              className="rounded-full capitalize w-40 text-lg bg-gradient-to-br from-cyan-500 to-emerald-600"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
