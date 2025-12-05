import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Moon, Sun, CalendarDays, Plus } from "lucide-react";

export const SleepForm = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-5 py-4">
      <div className="rounded-xl bg-white border border-gray-200 p-5">
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <CalendarDays className="w-4 h-4 text-gray-500" />
                記録日
              </label>
              <Input type="date" className="h-12 bg-gray-50 border-gray-200" />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Moon className="w-4 h-4 text-gray-500" />
                就寝時間
              </label>
              <Input type="time" className="h-12 bg-gray-50 border-gray-200" />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Sun className="w-4 h-4 text-gray-500" />
                起床時間
              </label>
              <Input type="time" className="h-12 bg-gray-50 border-gray-200" />
            </div>
          </div>
          <Button className="w-full h-12 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-bold transition-all duration-200">
            <Plus className="w-5 h-5 mr-2" />
            記録する
          </Button>
        </form>
      </div>
    </div>
  );
};
