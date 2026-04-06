'use client'
import SchoolLayout from '@/components/SchoolLayout'

export default function ReportsPage() {
  return (
    <SchoolLayout>
      <div className="text-2xl font-bold text-gray-800 mb-1">活動報告一覧</div>
      <div className="text-sm text-gray-500 mb-6">オファー先からの活動後報告を確認できます</div>
      <div className="bg-white rounded-xl shadow-sm p-6 text-sm text-gray-500">
        まだ報告はありません
      </div>
    </SchoolLayout>
  )
}