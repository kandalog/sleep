import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export const SleepForm = () => {
  return (
    <form className="px-4 py-4">
      <div className="">
        <div className="">
          <label className="font-bold">記録日</label>
          <Input type="date" className="py-5 mt-2" />
        </div>
        <div className="mt-4">
          <label className="font-bold">就寝時間</label>
          <Input type="time" className="py-5 mt-2" />
        </div>
        <div className="mt-4">
          <label className="font-bold">起床時間</label>
          <Input type="time" className="py-5 mt-2" />
        </div>
      </div>
      <div className="mt-4">
        <Button className="w-full bg-gray-500 text-white rounded py-6 font-bold cursor-pointer">
          記録
        </Button>
      </div>
    </form>
  );
};
