import React from "react";

const PracticeCard = (props) => {
  return (
    <div className="py-2 px-5 bg-gray-50 md:px-10 py-5 rounded-lg border border-gray-300 font-Sora mx-2">
      <div className="max-w-[390px] h-[295px] flex flex-col gap-4  justify-center items-center  ">
        <div className="text-[32px]">{props.no}</div>
        <div>
          <h1 className="text-[24px] font-semibold text-center">
            {props.head}
          </h1>
          <p className="text-gray-400 text-center max-w-[17rem]">
            "{props.content}"
          </p>
        </div>
      </div>
    </div>
  );
};

export default PracticeCard;
