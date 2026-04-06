'use client'
import SchoolLayout from '@/components/SchoolLayout'

export default function ReportPage() {
  return (
    <SchoolLayout>
      <div className="text-2xl font-bold text-gray-800 mb-1">活動実績レポート</div>
      <div className="text-sm text-gray-500 mb-6">年度ごとの活動実績を確認・出力できます</div>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <div className="font-bold text-gray-800">📄 2025年度 ボランティア実績</div>
          <button className="bg-green-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-green-900">📥 PDF出力</button>
        </div>
        <div className="p-5 text-sm text-gray-500">まだ実績データはありません</div>
      </div>
    </SchoolLayout>
  )
}