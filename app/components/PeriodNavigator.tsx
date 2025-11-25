import React from "react";

export const PeriodNavigator = () => {
  return (
    <div className="flex justify-between items-center py-4 px-4">
      <button className="cursor-pointer">←</button>
      <p className="text-center text-1xl font-bold">2024年10月</p>
      <button className="cursor-pointer">→</button>
    </div>
  );
};
