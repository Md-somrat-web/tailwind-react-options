import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";
import DaisyPrice from "../DaisyPrice/DaisyPrice";

const PricingOptions = ({ PricingPromised }) => {
  const PricingData = use(PricingPromised);
  console.log(PricingData);

  return (
    <div>
      <h2 className="text-4xl text-center mt-10 font-bold ">
        Get Our MemberShip
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-11/12 mx-auto">
        {PricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
        ))}

        {/* {PricingData.map((pricing) => (
          <DaisyPrice key={pricing.id} pricing={pricing}></DaisyPrice>
        ))} */}
      </div>
    </div>
  );
};

export default PricingOptions;
