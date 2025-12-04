import React from "react";

const Home = () => {
  return (
    <>
      {/* ヘッダー */}
      <header className="py-3 border-b border-gray-300">
        <h1 className="text-xl font-bold">睡眠記録</h1>
        {/* ハンバーガーメニュー */}
        <nav></nav>
      </header>

      {/* キャッチコピー */}
      <div className="mt-8 py-6 px-4">
        <h2 className="text-center font-bold text-2xl">睡眠記録</h2>
        <p className="text-center mt-1">質の良い睡眠で健康な生活を</p>
      </div>

      {/* 睡眠情報カード */}
      <div className="mt-10 mx-4 bg-linear-to-tr from-[#232526] to-[#414345] rounded-2xl p-8 text-white">
        {/* トップ */}
        <div className="flex">
          <div>
            <p>今日の睡眠時間</p>
            <p className="font-bold text-3xl">7時間30分</p>
          </div>
          <div className="ml-auto">icon</div>
        </div>
        {/* ボトム */}
        <div className="mt-4 grid grid-cols-6">
          <div className="col-span-3">
            <p className="text-sm">就寝時間</p>
            <p className="font-bold">23:30</p>
          </div>
          <div>
            <p className="whitespace-nowrap text-sm">起床時間</p>
            <p className="font-bold">07:00</p>
          </div>
        </div>
      </div>

      {/* 平均睡眠時間 */}
      <div className="py-6 px-4 flex space-x-4 justify-center">
        <div className="border flex items-center justify-between flex-1 rounded-xl shadow-sm bg-white/70 backdrop-blur-md py-6 px-4">
          <div>
            <p>平均睡眠時間</p>
            <p className="font-bold text-xl">7h25m</p>
          </div>
          <div>icon</div>
        </div>

        {/* 睡眠スコア */}
        <div className="border flex items-center justify-between flex-1 rounded-xl shadow-sm bg-white/70 backdrop-blur-md py-6 px-4">
          <div>
            <p>睡眠スコア</p>
            <p className="font-bold text-xl">85点</p>
          </div>
          <div>icon</div>
        </div>
      </div>

      {/* ボタン系 */}
      <div className="py-4 px-4">
        <button className="w-full bg-linear-to-tr from-[#8A4AF3] to-[#B676F8] text-white rounded py-4 font-bold cursor-pointer">
          + 睡眠を記録する
        </button>
        <button className="w-full bg-white border border-solid border-gray-200 mt-4 text-gray-500 rounded py-4 font-bold cursor-pointer">
          詳細統計を見る
        </button>
      </div>
    </>
  );
};

export default Home;
