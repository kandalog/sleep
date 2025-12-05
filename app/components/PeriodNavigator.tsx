import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PeriodNavigator = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex justify-between items-center py-4 px-5">
        <Button variant="ghost" size="icon" className="rounded-xl">
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </Button>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-gray-500" />
          <p className="text-lg font-bold text-gray-900">2024年10月</p>
        </div>
        <Button variant="ghost" size="icon" className="rounded-xl">
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </Button>
      </div>
    </div>
  );
};
