import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto">
      {/* ヘッダー */}
      <header className="py-3 border-b border-gray-300">
        <h1 className="font-bold text-2xl text-center">睡眠記録</h1>
      </header>

      {/* 期間 */}
      <div className="flex justify-between items-center py-4 px-4">
        <button className="cursor-pointer">←</button>
        <p className="text-center text-1xl font-bold">2024年10月</p>
        <button className="cursor-pointer">→</button>
      </div>

      {/* フォーム */}
      <form className="border px-4 py-4">
        <dl className="">
          <div className="">
            <dt className="font-bold">記録日</dt>
            <dd>
              <Input type="date" className="py-5 mt-2" />
            </dd>
          </div>
          <div className="mt-4">
            <dt className="font-bold">就寝時間</dt>
            <dd>
              <Input type="time" className="py-5 mt-2" />
            </dd>
          </div>
          <div className="mt-4">
            <dt className="font-bold">起床時間</dt>
            <dd>
              <Input type="time" className="py-5 mt-2" />
            </dd>
          </div>
        </dl>
        <div className="mt-4">
          <Button className="w-full bg-gray-500 text-white rounded py-6 font-bold cursor-pointer">
            記録
          </Button>
        </div>
      </form>
      {/* フォームエンド */}

      {/* タイムライン */}
      <div className="py-4 px-4">
        <h2 className="font-bold text-lg pt-2">今月の記録</h2>
        <ul className="mt-4 max-h-[500px] overflow-auto">
          <li className="grid grid-cols-6 items-center gap-2 py-4 border-b">
            <p className="col-span-2">10/15</p>
            <p>23:30</p>
            <span className="">→</span>
            <p>7:00</p>
            <p>7h30m</p>
          </li>
          <li className="grid grid-cols-6 items-center gap-2 py-4 border-b">
            <p className="col-span-2">10/16</p>
            <p>23:20</p>
            <span className="">→</span>
            <p>6:50</p>
            <p>7h30m</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
