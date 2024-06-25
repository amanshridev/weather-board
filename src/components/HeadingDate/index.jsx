import React from "react";

const Heading = ({ data }) => {
  return (
    <div className="w-[81%] absolute rounded-md right-0 top-20 flex flex-wrap items-center justify-between py-4 pr-4">
      <h2 className="text-white font-bold">Dashboard</h2>
      <h2 className="text-white font-bold">{data}</h2>
    </div>
  );
};

export default Heading;
