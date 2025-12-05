import { Moon, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between py-4 px-5">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gray-900">
            <Moon className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-900">睡眠記録</h1>
        </div>
        <Button variant="ghost" size="icon" className="rounded-xl">
          <Menu className="w-5 h-5 text-gray-600" />
        </Button>
      </div>
    </header>
  );
};
