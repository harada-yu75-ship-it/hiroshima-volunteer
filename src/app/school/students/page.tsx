'use client'
import SchoolLayout from '@/components/SchoolLayout'

export default function StudentsPage() {
  return (
    <SchoolLayout>
      <div className="text-2xl font-bold text-gray-800 mb-1">生徒参加状況</div>
      <div className="text-sm text-gray-500 mb-6">ボランティアに参加した生徒の記録です</div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-xl p-5 shadow-sm border-t-4 border-purple-400">
          <div className="text-3xl font-bold text-gray-800">0</div>
          <div className="text-xs text-gray-500 mt-1">参加経験のある生徒</div>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border-t-4 border-teal-400">
          <div className="text-3xl font-bold text-gray-800">0h</div>
          <div className="text-xs text-gray-500 mt-1">累計活動時間</div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 font-bold text-gray-800">👥 生徒参加ランキング</div>
        <div className="p-5 text-sm text-gray-500">まだ参加記録はありません</div>
      </div>
    </SchoolLayout>
  )
}