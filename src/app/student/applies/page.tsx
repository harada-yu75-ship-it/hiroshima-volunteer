'use client'
import StudentLayout from '@/components/StudentLayout'

export default function AppliesPage() {
  return (
    <StudentLayout>
      <div className="text-2xl font-bold text-gray-800 mb-1">申込み状況</div>
      <div className="text-sm text-gray-500 mb-6">あなたの申込み一覧です</div>
      <div className="bg-white rounded-xl shadow-sm p-6 text-sm text-gray-500">
        まだ申込みはありません
      </div>
    </StudentLayout>
  )
}