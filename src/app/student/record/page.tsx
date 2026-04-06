'use client'
import StudentLayout from '@/components/StudentLayout'

export default function RecordPage() {
  return (
    <StudentLayout>
      <div className="text-2xl font-bold text-gray-800 mb-1">活動記録</div>
      <div className="text-sm text-gray-500 mb-6">あなたの活動履歴です</div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 shadow-sm border-t-4 border-green-400">
          <div className="text-3xl font-bold text-gray-800">0</div>
          <div className="text-xs text-gray-500 mt-1">累計活動時間（時間）</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border-t-4 border-blue-400">
          <div className="text-3xl font-bold text-gray-800">0</div>
          <div className="text-xs text-gray-500 mt-1">参加活動数</div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 font-bold text-gray-800">🏅 活動履歴</div>
        <div className="p-5 text-sm text-gray-500">活動記録はまだありません</div>
      </div>
    </StudentLayout>
  )
}