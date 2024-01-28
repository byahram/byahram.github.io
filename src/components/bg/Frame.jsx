import React from "react"; // eslint-disable-line no-unused-vars

export const Frame = () => {
  return (
    <div id="frame" className="p-[2rem] mix-blend-difference">
      <div className="frame_line w-px h-[calc(100%-4rem)]"></div>
      <div className="frame_line w-px h-[calc(100%-4rem)] right-[2rem]"></div>
      <div className="frame_line w-[calc(100%-4rem)] h-px"></div>
      <div className="frame_line w-[calc(100%-4rem)] h-px bottom-[2rem]"></div>
    </div>
  );
};

export default Frame;
