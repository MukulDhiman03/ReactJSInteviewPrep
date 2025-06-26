import React from "react";

const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl">Contact</h1>
      <p>Contact here for any query</p>
      <form>
        <input
          placeholder="name"
          type="text"
          className=" border border-black p-2 mx-2"
        />
        <input
          placeholder="message"
          type="text"
          className=" border border-black p-2 mx-2"
        />
        <button className="border border-black p-2">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
