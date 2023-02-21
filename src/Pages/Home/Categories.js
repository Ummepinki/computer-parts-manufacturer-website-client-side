import React from "react";
import img1 from "../../assets/images/Processor.jpg";
import img2 from "../../assets/images/Motherboard.jpg";
import img3 from "../../assets/images/img(3).jpg";
import img4 from "../../assets/images/img(4).jpg";
import img5 from "../../assets/images/img (5).jpg";
import img6 from "../../assets/images/img (6).jpg";
import ComputerPart from "./ComputerPart";

const Categories = () => {
  const computerParts = [
    {
      _id: 1,
      img: img1,
      name: "Processors",
      description:
        "Every computer comprises 5 basic parts, namely, a motherboard, a central processing unit, a graphics processing unit, a random access memory, and a hard disk or solid-state drive. Be it a high-end gaming computer system or be it a basic desktop system for kids, every computer consists of 5 parts.",
    },
    {
      _id: 2,
      img: img2,
      name: "Motherboard",
      description:
        "Every computer comprises 5 basic parts, namely, a motherboard, a central processing unit, a graphics processing unit, a random access memory, and a hard disk or solid-state drive. Be it a high-end gaming computer system or be it a basic desktop system for kids, every computer consists of 5 parts.",
    },
    {
      _id: 3,
      img: img3,
      name: "CPU Fan",
      description:
        "Every computer comprises 5 basic parts, namely, a motherboard, a central processing unit, a graphics processing unit, a random access memory, and a hard disk or solid-state drive. Be it a high-end gaming computer system or be it a basic desktop system for kids, every computer consists of 5 parts.",
    },
    {
      _id: 4,
      img: img4,
      name: "Case",
      description:
        "Every computer comprises 5 basic parts, namely, a motherboard, a central processing unit, a graphics processing unit, a random access memory, and a hard disk or solid-state drive. Be it a high-end gaming computer system or be it a basic desktop system for kids, every computer consists of 5 parts.",
    },
    {
      _id: 5,
      img: img5,
      name: "RAM",
      description:
        "Every computer comprises 5 basic parts, namely, a motherboard, a central processing unit, a graphics processing unit, a random access memory, and a hard disk or solid-state drive. Be it a high-end gaming computer system or be it a basic desktop system for kids, every computer consists of 5 parts.",
    },
    {
      _id: 6,
      img: img6,
      name: "CGA Card",
      description:
        "Every computer comprises 5 basic parts, namely, a motherboard, a central processing unit, a graphics processing unit, a random access memory, and a hard disk or solid-state drive. Be it a high-end gaming computer system or be it a basic desktop system for kids, every computer consists of 5 parts.",
    },
  ];
  return (
    <div className="bg-white p-2 lg:mx-20">
      <h2 className="text-3xl font-bold text-center mt-20 mb-5">
        CPU <span className="text-primary">Parts </span>
      </h2>
      <div className="grid lg:grid-cols-3 grid-cols-1">
        {computerParts.map((computerPart) => (
          <ComputerPart
            key={computerPart._id}
            computerPart={computerPart}
          ></ComputerPart>
        ))}
      </div>
    </div>
  );
};

export default Categories;
