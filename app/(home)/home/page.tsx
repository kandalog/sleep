"use client";

import { Button } from "@/components/ui/button";
import {
  Moon,
  Sun,
  TrendingUp,
  Award,
  Plus,
  BarChart3,
  Clock,
  BedDouble,
  Menu,
  ChevronRight,
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
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

      {/* メインコンテンツ */}
      <main className="max-w-[1200px] mx-auto">
        {/* ヒーローセクション */}
        <section className="px-5 pt-8 pb-6">
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-2">おはようございます</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              質の良い睡眠で健康な生活を
            </h2>
            <p className="text-gray-400 text-sm">
              毎日の睡眠を記録して、パターンを改善しましょう
            </p>
          </div>
        </section>

        {/* メイン睡眠情報カード */}
        <section className="px-5 pb-5">
          <div className="rounded-2xl bg-gray-900 p-6">
            {/* カードヘッダー */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-gray-400 text-sm mb-1 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  今日の睡眠時間
                </p>
                <p className="font-bold text-4xl text-white tracking-tight">
                  7<span className="text-2xl text-gray-400">時間</span>30
                  <span className="text-2xl text-gray-400">分</span>
                </p>
              </div>
              <div className="p-3 rounded-2xl bg-gray-800">
                <BedDouble className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* 睡眠時間詳細 */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Moon className="w-4 h-4 text-gray-400" />
                  <p className="text-gray-400 text-sm">就寝時間</p>
                </div>
                <p className="font-bold text-xl text-white">23:30</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Sun className="w-4 h-4 text-gray-400" />
                  <p className="text-gray-400 text-sm">起床時間</p>
                </div>
                <p className="font-bold text-xl text-white">07:00</p>
              </div>
            </div>
          </div>
        </section>

        {/* 統計カード */}
        <section className="px-5 pb-5 grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-white p-5 border border-gray-200">
            <div className="p-2.5 rounded-lg bg-gray-100 w-fit mb-3">
              <TrendingUp className="w-5 h-5 text-gray-700" />
            </div>
            <p className="text-gray-500 text-sm mb-1">平均睡眠時間</p>
            <p className="font-bold text-2xl text-gray-900">
              7<span className="text-lg text-gray-400">h</span>25
              <span className="text-lg text-gray-400">m</span>
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 border border-gray-200">
            <div className="p-2.5 rounded-lg bg-gray-100 w-fit mb-3">
              <Award className="w-5 h-5 text-gray-700" />
            </div>
            <p className="text-gray-500 text-sm mb-1">睡眠スコア</p>
            <p className="font-bold text-2xl text-gray-900">
              85<span className="text-lg text-gray-400">点</span>
            </p>
          </div>
        </section>

        {/* 週間グラフプレビュー */}
        <section className="px-5 pb-5">
          <div className="rounded-xl bg-white p-5 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gray-100">
                  <BarChart3 className="w-4 h-4 text-gray-700" />
                </div>
                <h3 className="font-semibold text-gray-900">今週の睡眠</h3>
              </div>
              <span className="text-sm text-gray-500 font-medium flex items-center">
                詳細
                <ChevronRight className="w-4 h-4" />
              </span>
            </div>
            {/* シンプルな棒グラフ */}
            <div className="flex items-end justify-between gap-2 h-24">
              {[65, 80, 75, 90, 70, 85, 78].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className={`w-full rounded-t-lg transition-all duration-300 ${
                      i === 6 ? "bg-gray-900" : "bg-gray-200"
                    }`}
                    style={{ height: `${height}%` }}
                  />
                  <span
                    className={`text-xs ${
                      i === 6 ? "text-gray-900 font-medium" : "text-gray-400"
                    }`}
                  >
                    {["月", "火", "水", "木", "金", "土", "日"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* アクションボタン */}
        <section className="px-5 pb-8 space-y-3">
          <Button className="w-full h-14 rounded-xl bg-gray-900 hover:bg-gray-800 text-white text-base font-bold transition-all duration-200">
            <Plus className="w-5 h-5 mr-2" />
            睡眠を記録する
          </Button>
          <Button
            variant="outline"
            className="w-full h-14 rounded-xl bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 text-base font-semibold transition-all duration-200"
          >
            <BarChart3 className="w-5 h-5 mr-2" />
            詳細統計を見る
          </Button>
        </section>
      </main>
    </div>
  );
};

export default Home;
