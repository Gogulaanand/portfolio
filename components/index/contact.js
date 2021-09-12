import React from "react";

export default function Contact() {
  return (
    <div id="contact">
      <div className="my-24">
        <div className="w-8/12 rounded-lg border border-gray-900 mx-auto flex items-center">
          <div className="m-8 flex justify-between">
            <p className="font-normal text-6xl leading-tight w-1/2 text-left my-12 mx-4">
              Want to get in touch ?
            </p>
            <form className="w-1/2 my-8 flex flex-col gap-4">
              <div className="grid grid-cols-2 grid-rows-1 gap-4">
                <label className="text-gray-500">
                  Name
                  <input
                    type="name"
                    placeholder="Enter your name"
                    required
                    className="outline-none font-light col-span-1 col-start-1 col-end-2 row-span-1 row-start-1 row-end-2 bg-white rounded-md pl-4 py-3 my-2 w-full"
                  />
                </label>
                <label className="text-gray-500">
                  Email
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="outline-none font-light col-span-1 col-start-2 col-end-3 row-span-1 row-start-1 row-end-2 bg-white rounded-md pl-4 py-3 my-2 w-full"
                  />
                </label>
              </div>
              <label className="text-gray-500">
                Message
                <textarea
                  required
                  placeholder="Enter your message"
                  className="outline-none font-light bg-white rounded-md pl-4 py-3 my-2 w-full h-40"
                />
              </label>
              <button className="row-start-4 row-end-5 col-span-1 bg-black text-white rounded-lg px-4 py-3 text-sm w-24">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
