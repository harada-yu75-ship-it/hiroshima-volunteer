'use client'
import SchoolLayout from '@/components/SchoolLayout'

export default function ApplicantsPage() {
  return (
    <SchoolLayout>
      <div className="text-2xl font-bold text-gray-800 mb-1">申込者集約</div>
      <div className="text-sm text-gray-500 mb-6">全オファーへの申込み状況を一覧で確認できます</div>
      <div className="bg-white rounded-xl shadow-sm p-6 text-sm text-gray-500">
        申込みはまだありません
      </div>
    </SchoolLayout>
  )
}