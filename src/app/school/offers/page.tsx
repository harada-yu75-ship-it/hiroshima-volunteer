'use client'
import SchoolLayout from '@/components/SchoolLayout'

export default function OffersPage() {
  return (
    <SchoolLayout>
      <div className="text-2xl font-bold text-gray-800 mb-1">オファー一覧</div>
      <div className="text-sm text-gray-500 mb-6">現在公開中のボランティアオファー一覧です</div>
      <div className="bg-white rounded-xl shadow-sm p-6 text-sm text-gray-500">
        公開中のオファーはありません
      </div>
    </SchoolLayout>
  )
}