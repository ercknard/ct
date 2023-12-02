import React from "react";
import Button from "@mui/material/Button";

export default function Contact() {
  return (
    <div
      id="contact"
      className="py-20 lg:py-[120px] overflow-hidden relative z-10 3xl:w-6/12 lg:w-11/12 justify-center mx-auto"
    >
      <div className="container">
        <div className="flex flex-wrap lg:justify-between -mx-4">
          <div className="w-full lg:w-1/2 xl:w-6/12 px-4 flex items-center">
            <div className="max-w-[570px] mb-12 lg:mb-0">
              <h2
                className="
                  text-3xl font-bold tracking-tight sm:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-emerald-600"
              >
                GET IN TOUCH WITH US
              </h2>
              <p className="mt-2 lg:text-2xl text-base text-body-color leading-8 mb-9">
                LETS TALK ABOUT YOUR PROJECT, Fill the form and send in your
                queries. We will respond as soon as we can.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
            <div className="bg-gray-900 relative rounded-lg pb-8 pt-4 sm:p-12 sm:pt-6 shadow-lg">
              <h2
                className="
                  text-2xl text-center mb-4 font-bold tracking-tight sm:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-emerald-600"
              >
                Contact Us
              </h2>
              <form>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border-b border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        bg-transparent
                        "
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border-b border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        bg-transparent
                        "
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Message Subject"
                    className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border-b border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        bg-transparent
                        "
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    placeholder="Your Message"
                    className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border-b border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        bg-transparent
                        "
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="
                        w-full
                        text-white
                        bg-gradient-to-br from-cyan-500 to-emerald-600
                        rounded
                        p-3
                        transition
                        hover:bg-opacity-90
                        "
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
