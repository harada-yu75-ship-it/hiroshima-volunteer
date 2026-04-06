'use client'
import OrgLayout from '@/components/OrgLayout'

export default function OrgStatusPage() {
  return (
    <OrgLayout>
      <div className="text-2xl font-bold text-gray-800 mb-1">応募状況確認</div>
      <div className="text-sm text-gray-500 mb-6">あなたの団体のオファーへの応募状況です</div>
      <div className="bg-white rounded-xl shadow-sm p-6 text-sm text-gray-500">
        まだ公開中のオファーはありません
      </div>
    </OrgLayout>
  )
}