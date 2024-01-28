import React from "react"; // eslint-disable-line no-unused-vars

export const Mask = () => {
  return (
    <div id="mask" className="overflow-hidden">
      <div className="mask_cont top-0 left-0 w-full h-[2rem]"></div>
      <div className="mask_cont top-0 right-0 w-[2rem] h-full"></div>
      <div className="mask_cont left-0 bottom-0 w-full h-[2rem]"></div>
      <div className="mask_cont left-0 top-0 w-[2rem] h-full"></div>
    </div>
  );
};

export default Mask;
