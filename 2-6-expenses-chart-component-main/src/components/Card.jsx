/* eslint-disable react/prop-types */

import { useState } from "react";

const Card = ({ data }) => {
  const [hoverIndex, setHoverIndex] = useState(-1);

  function pxToRem(px, base = 16) {
    return px / base;
  }

  function convertToRem(number) {
    const numToPx = number * 2;
    return pxToRem(numToPx);
  }

  return (
    <div className="bg-VeryPaleOrange flex w-[22rem] flex-col gap-4 rounded-xl p-6 md:w-96 md:rounded-2xl md:p-8">
      <h1 className="text-DarkBrown text-2xl font-bold">
        Spending - Last 7 days
      </h1>

      {/* BAR CHART */}
      <div className="flex h-[12.5rem] items-end justify-between">
        {data.map((item, index) => {
          let height = `h-[${convertToRem(item.amount)}rem]`;
          return (
            <div key={index} className="text-center">
              <div
                className={`bg-SoftRed relative ${height} w-8 cursor-pointer rounded-sm hover:bg-opacity-50`}
                onMouseOver={() => {
                  setHoverIndex(index);
                }}
                onMouseLeave={() => setHoverIndex(-1)}
              >
                {hoverIndex === index && (
                  <span className="text-VeryPaleOrange bg-DarkBrown absolute -top-[2.15rem] -translate-x-1/2 rounded-sm p-1 text-sm">
                    ${item.amount}
                  </span>
                )}
              </div>
              <p className="text-MediumBrown mt-1 text-xs">{item.day}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-Cream block h-[1px] border-none"></div>

      {/* Overview */}
      <div className="flex items-end justify-between">
        <div>
          <p className="text-MediumBrown text-sm">Total this month</p>
          <h1 className="text-DarkBrown text-4xl font-bold">$478.33</h1>
        </div>
        <div className="text-right">
          <p className="text-DarkBrown font-bold">+2.4%</p>
          <p className="text-MediumBrown text-sm">from last month</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
