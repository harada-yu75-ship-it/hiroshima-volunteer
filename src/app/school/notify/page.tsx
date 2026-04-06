'use client'
import SchoolLayout from '@/components/SchoolLayout'

export default function NotifyPage() {
  return (
    <SchoolLayout>
      <div className="text-2xl font-bold text-gray-800 mb-1">告知・連絡</div>
      <div className="text-sm text-gray-500 mb-6">生徒やオファー先への連絡ができます</div>
      <div className="grid grid-cols-2 gap-5">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100 font-bold text-gray-800">📢 生徒への告知</div>
          <div className="p-5 space-y-3">
            <div>
              <label className="text-xs font-bold text-gray-600 block mb-1">対象オファー</label>
              <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm">
                <option>すべて</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-gray-600 block mb-1">メッセージ</label>
              <textarea className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" rows={4} placeholder="新しいボランティア活動のお知らせです…" />
            </div>
            <button className="bg-green-700 text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-green-900">📤 全生徒に告知</button>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100 font-bold text-gray-800">📧 オファー先への連絡</div>
          <div className="p-5 space-y-3">
            <div>
              <label className="text-xs font-bold text-gray-600 block mb-1">連絡先選択</label>
              <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm">
                <option>オファー先を選択</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-gray-600 block mb-1">件名</label>
              <input className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" placeholder="ボランティア参加確定のご連絡" />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-600 block mb-1">本文</label>
              <textarea className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" rows={4} placeholder="お世話になっております…" />
            </div>
            <button className="bg-amber-500 text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-amber-700">📤 メール送信</button>
          </div>
        </div>
      </div>
    </SchoolLayout>
  )
}