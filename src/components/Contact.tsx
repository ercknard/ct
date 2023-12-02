"use client";
import React, { useState } from "react";
import Button from "@mui/material/Button";

export default function Contact() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation
  const [errors, setErrors] = useState({} as any);

  //   Setting button text
  const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors: any = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/nodemailer", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      setFullname("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
    console.log(fullname, email, subject, message);
  };
  return (
    <>
      <div className="relative">
        <div className="contact-svg" />
        <div
          id="contact"
          className="py-20 lg:py-[120px] overflow-hidden relative z-10 3xl:w-6/12 lg:w-11/12 w-11/12 justify-center mx-auto"
        >
          <div className="container">
            <div className="flex flex-wrap lg:justify-between -mx-4">
              <div className="w-full lg:w-1/2 xl:w-6/12 px-4 flex items-center">
                <div className="max-w-[570px] mb-12 lg:mb-0">
                  <h2
                    className="
                  text-3xl font-bold tracking-tight sm:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-emerald-600"
                  >
                    Get in touch with us
                  </h2>
                  <p className="mt-2 lg:text-2xl text-base text-body-color leading-8 mb-9">
                    LETS TALK ABOUT YOUR PROJECT, Fill the form and send in your
                    queries. We will respond as soon as we can.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
                <div className="bg-gray-900 relative rounded-lg pb-8 pt-4 sm:p-12 sm:pt-6 shadow-lg p-4">
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
                        value={fullname}
                        onChange={(e) => {
                          setFullname(e.target.value);
                        }}
                        name="fullname"
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
                      {errors?.fullname && (
                        <p className="text-red-500">
                          Fullname cannot be empty.
                        </p>
                      )}
                    </div>
                    <div className="mb-6">
                      <input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
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
                      {errors?.email && (
                        <p className="text-red-500">Email cannot be empty.</p>
                      )}
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        placeholder="Message Subject"
                        name="subject"
                        value={subject}
                        onChange={(e) => {
                          setSubject(e.target.value);
                        }}
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
                      {errors?.subject && (
                        <p className="text-red-500">Subject cannot be empty.</p>
                      )}
                    </div>
                    <div className="mb-6">
                      <textarea
                        placeholder="Your Message"
                        name="message"
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                        }}
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
                    {errors?.message && (
                      <p className="text-red-500">
                        Message body cannot be empty.
                      </p>
                    )}
                    <div>
                      <button
                        type="submit"
                        className="
                        w-full
                        text-white
                        bg-gradient-to-br from-cyan-500 to-emerald-600
                        rounded
                        lg:p-3
                        p-1
                        transition
                        hover:bg-opacity-90
                        text-lg
                        mb-4
                        "
                      >
                        Send Message
                      </button>
                    </div>
                    <div className="text-left to-space-above">
                      Alert message :{" "}
                      <span>
                        {showSuccessMessage && (
                          <p className="text-green-500 font-semibold text-sm my-2">
                            Thankyou! Your Message has been delivered.
                          </p>
                        )}
                        {showFailureMessage && (
                          <p className="text-red-500">
                            Oops! Something went wrong, please try again.
                          </p>
                        )}
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
