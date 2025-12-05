import { Moon, Sun, Clock, ArrowRight } from "lucide-react";

export const TimeLine = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-5 py-4">
      <div className="rounded-xl bg-white border border-gray-200 p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 rounded-lg bg-gray-100">
            <Clock className="w-4 h-4 text-gray-700" />
          </div>
          <h2 className="font-bold text-lg text-gray-900">今月の記録</h2>
        </div>
        <ul className="max-h-[400px] overflow-auto divide-y divide-gray-100">
          <TimeLineItem date="10/15" bedTime="23:30" wakeTime="7:00" duration="7h30m" />
          <TimeLineItem date="10/14" bedTime="00:15" wakeTime="7:30" duration="7h15m" />
          <TimeLineItem date="10/13" bedTime="23:00" wakeTime="6:45" duration="7h45m" />
        </ul>
      </div>
    </div>
  );
};

type TimeLineItemProps = {
  date: string;
  bedTime: string;
  wakeTime: string;
  duration: string;
};

const TimeLineItem = ({ date, bedTime, wakeTime, duration }: TimeLineItemProps) => {
  return (
    <li className="flex items-center py-4 hover:bg-gray-50 -mx-2 px-2 rounded-lg transition-colors">
      <div className="w-16 font-medium text-gray-900">{date}</div>
      <div className="flex items-center gap-2 flex-1">
        <div className="flex items-center gap-1.5 text-gray-600">
          <Moon className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-sm">{bedTime}</span>
        </div>
        <ArrowRight className="w-4 h-4 text-gray-300" />
        <div className="flex items-center gap-1.5 text-gray-600">
          <Sun className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-sm">{wakeTime}</span>
        </div>
      </div>
      <div className="font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded-lg text-sm">
        {duration}
      </div>
    </li>
  );
};
