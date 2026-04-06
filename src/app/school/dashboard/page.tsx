'use client'
import SchoolLayout from '@/components/SchoolLayout'

export default function SchoolDashboard() {
  return (
    <SchoolLayout>
      <div className="text-2xl font-bold text-gray-800 mb-1">ダッシュボード</div>
      <div className="text-sm text-gray-500 mb-6">ボランティア活動全体の状況を把握できます</div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        {[
          { label: '公開中オファー', value: '0', color: 'border-green-400' },
          { label: '承認待ち', value: '0', color: 'border-amber-400' },
          { label: '申込み総数', value: '0', color: 'border-blue-400' },
          { label: '参加経験のある生徒', value: '0', color: 'border-purple-400' },
          { label: '累計活動時間', value: '0h', color: 'border-teal-400' },
        ].map(card => (
          <div key={card.label} className={`bg-white rounded-xl p-4 shadow-sm border-t-4 ${card.color}`}>
            <div className="text-3xl font-bold text-gray-800">{card.value}</div>
            <div className="text-xs text-gray-500 mt-1">{card.label}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100 font-bold text-gray-800">📥 承認待ちオファー</div>
          <div className="p-5 text-sm text-gray-500">承認待ちのオファーはありません</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100 font-bold text-gray-800">🏃 募集状況サマリー</div>
          <div className="p-5 text-sm text-gray-500">公開中のオファーはありません</div>
        </div>
      </div>
    </SchoolLayout>
  )
}