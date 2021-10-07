import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { BadgeCheckIcon } from "@heroicons/react/outline";

export default function Contact() {
  const [state, handleSubmit] = useForm(
    `${process.env.NEXT_PUBLIC_FORMSPREE_API}`
  );

  return (
    <div id="contact">
      <div className="my-24">
        <div className="grid grid-cols-2 2fr px-16">
          <p className="font-normal text-4xl md:text-6xl leading-normal lg:leading-tight w-full text-left my-12 mx-4">
            Want to get in touch ?
          </p>
          <form
            className="w-full my-8 grid col-span-1 grid-rows-5 gap-4"
            onSubmit={handleSubmit}
          >
            <label className="text-gray-500">
              Name
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Enter your name"
                required
                className="outline-none font-light bg-white rounded-md pl-4 py-3 my-2 w-full col-span-full"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </label>
            <label className="text-gray-500">
              Email
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter your email"
                className="outline-none font-light bg-white rounded-md pl-4 py-3 my-2 w-full col-span-full"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </label>
            <label className="text-gray-500 row-span-2">
              Message
              <textarea
                required
                name="message"
                id="message"
                placeholder="Enter your message"
                className="outline-none font-light row-span-2 bg-white rounded-md pl-4 py-3 my-2 w-full h-40"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </label>
            {state.succeeded ? (
              <p className="flex">
                <BadgeCheckIcon className="w-7 h-7 mr-2 text-green-500" />
                Thanks for contacting. I will get back to you at the earliest
                possible
              </p>
            ) : (
              <button
                type="submit"
                className="row-start-4 row-end-5 col-span-2 lg:col-span-1 bg-black text-white rounded-lg px-4 py-3 text-sm w-24 self-center lg:self-start"
                disabled={state.submitting}
              >
                Submit
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
