'use client'
import StudentLayout from '@/components/StudentLayout'

export default function BrowsePage() {
  return (
    <StudentLayout>
      <div className="text-2xl font-bold text-gray-800 mb-1">ボランティアを探す</div>
      <div className="text-sm text-gray-500 mb-6">参加したい活動を見つけて申し込もう！</div>
      <div className="bg-white rounded-xl shadow-sm p-6 text-sm text-gray-500">
        現在公開中のボランティアはありません
      </div>
    </StudentLayout>
  )
}