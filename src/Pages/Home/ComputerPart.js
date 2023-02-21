import React, { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";

const ComputerPart = ({ computerPart }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const { img, name, description } = computerPart;
  return (
    <div className={"p-5 shadow-md m-3 rounded-lg border-gray-200"}>
      <div className="flex justify-center">
        <img className="w-full h-[250px]" src={img} alt="" />
      </div>
      <h2 className="text-2xl pt-5 font-bold">{name}</h2>
      <p className="text-justify">
        {isReadMore ? description.slice(0, 160) + "..." : description}
        <span
          onClick={toggleReadMore}
          className="read-or-hide cursor-pointer block"
        >
          {isReadMore ? (
            <button className="flex items-center hover:transition-all hover:text-secondary text-primary mt-4">
              See more
              <BsArrowRightShort className="hover:translate-x-1 mt-[2px]" />
            </button>
          ) : (
            <button className="flex items-center hover:transition-all hover:text-secondary text-primary mt-4">
              See Less
              <BsArrowRightShort className="hover:translate-x-1 mt-[2px]" />
            </button>
          )}
        </span>
      </p>
    </div>
  );
};

export default ComputerPart;
