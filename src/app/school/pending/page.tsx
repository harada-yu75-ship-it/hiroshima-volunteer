'use client'
import SchoolLayout from '@/components/SchoolLayout'

export default function PendingPage() {
  return (
    <SchoolLayout>
      <div className="text-2xl font-bold text-gray-800 mb-1">承認待ちオファー</div>
      <div className="text-sm text-gray-500 mb-6">外部団体から届いたオファーを確認・承認します</div>
      <div className="bg-white rounded-xl shadow-sm p-6 text-sm text-gray-500">
        承認待ちのオファーはありません
      </div>
    </SchoolLayout>
  )
}