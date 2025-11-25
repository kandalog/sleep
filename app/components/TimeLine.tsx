import React from "react";

export const TimeLine = () => {
  return (
    <div className="py-4 px-4">
      <h2 className="font-bold text-lg pt-2">今月の記録</h2>
      <ul className="mt-4 max-h-[500px] overflow-auto">
        {/* TimeLineItem */}
        <TimeLineItem />
        <TimeLineItem />
      </ul>
    </div>
  );
};

const TimeLineItem = () => {
  return (
    <li className="grid grid-cols-6 items-center gap-2 py-4 border-b">
      <p className="col-span-2">10/15</p>
      <p>23:30</p>
      <span className="">→</span>
      <p>7:00</p>
      <p>7h30m</p>
    </li>
  );
};
