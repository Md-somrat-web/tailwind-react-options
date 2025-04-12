import React from "react";
import PricingFeatures from "./PricingFeatures";

const PricingCard = ({ pricing }) => {
  const { name, price, description, features } = pricing;
  return (
    <div className=" flex flex-col border bg-amber-600 rounded-2xl p-4">
      {/* card head */}
      <div>
        <div className="text-7xl">{name}</div>
        <div className="text-4xl">{price}</div>
      </div>
      {/* card body */}
      <div className="bg-amber-400  p-4 rounded-2xl mt-10 flex-1  ">
        <p>{description}</p>
        {features.map((feature, index) => (
          <PricingFeatures key={index} feature={feature}></PricingFeatures>
        ))}
      </div>
      <button className="btn w-full bg-black text-white text-2xl mt-4">
        Subscribe
      </button>
    </div>
  );
};

export default PricingCard;
