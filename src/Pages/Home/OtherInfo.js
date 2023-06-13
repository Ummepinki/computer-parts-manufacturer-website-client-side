import React from "react";
import { MdOutlineDeliveryDining, MdPayment } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { GoGift } from "react-icons/go";
const OtherInfo = () => {
  const cards = [
    {
      _id: 1,
      icon: <MdOutlineDeliveryDining />,
      name: "FREE DELIVERY",
      info: "Worldwide from $75",
    },
    {
      _id: 2,
      icon: <AiOutlineTransaction />,
      name: "EASY RETURNS",
      info: "365 days for free returns",
    },
    {
      _id: 3,
      icon: <MdPayment />,
      name: "COMFORT PAYMENTS",
      info: "Credit Cards Available",
    },
    {
      _id: 4,
      icon: <GoGift />,
      name: "FREE GIFTS",
      info: "Get gifts and discounts",
    },
  ];
  return (
    <div>
      <div className="divider"></div>

      <div className="lg:flex justify-evenly">
        {cards.map((card) => (
          <div key={card._id}>
            <div className="flex">
              <span className="text-5xl text-primary">{card.icon}</span>
              <div className="mx-4">
                <p className="text-xl">{card.name}</p>
                <span className=" text-gray-400">{card.info}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default OtherInfo;
