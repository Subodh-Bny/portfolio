"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import FadeInComponent from "@/components/FadeInComponent";
import toast from "react-hot-toast";

interface InputProps {
  fname: string;
  lname: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const [inputs, setInputs] = useState<InputProps>({
    fname: "",
    lname: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you for the message", {
      style: {
        border: "1px solid #dc2626",
        padding: "16px",
        color: "#dc2626",
      },
      iconTheme: {
        primary: "#dc2626",
        secondary: "#fff",
      },
    });
    console.log(inputs);
  };
  return (
    <FadeInComponent>
      {" "}
      <div className="flex flex-col items-center ">
        <h1 className="text-center text-primary-500 text-4xl font-bold">
          Let&apos;s Team up
        </h1>
        <form
          className="bg-white p-9 rounded-xl mt-3 w-[500px]"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-2 flex-col">
            <label htmlFor="fname">First Name</label>
            <Input
              id="fname"
              value={inputs.fname}
              onChange={(e) => setInputs({ ...inputs, fname: e.target.value })}
            />
          </div>
          <div className="flex gap-2 flex-col">
            <label htmlFor="lname">Last Name</label>{" "}
            <Input
              id="lname"
              value={inputs.lname}
              onChange={(e) => setInputs({ ...inputs, lname: e.target.value })}
            />
          </div>

          <div className="flex gap-2 flex-col">
            <label htmlFor="email">Email</label>{" "}
            <Input
              id="email"
              type="email"
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
          </div>

          <div className="flex gap-2 flex-col">
            <label htmlFor="message">Message</label>
            <Textarea
              id="message"
              value={inputs.message}
              onChange={(e) =>
                setInputs({ ...inputs, message: e.target.value })
              }
            />
            <Button className="bg-primary-500">Send</Button>
          </div>
        </form>
      </div>
    </FadeInComponent>
  );
};

export default ContactPage;
