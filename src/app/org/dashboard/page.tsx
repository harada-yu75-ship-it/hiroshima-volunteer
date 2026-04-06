'use client'
import { useRouter } from 'next/navigation'
import OrgLayout from '@/components/OrgLayout'

export default function OrgDashboard() {
  const router = useRouter()
  return (
    <OrgLayout>
      <div className="text-2xl font-bold text-gray-800 mb-1">オファー先メニュー</div>
      <div className="text-sm text-gray-500 mb-6">左のメニューから操作してください</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { icon: '✏️', label: 'オファー登録', desc: '新しいボランティアを募集する', path: '/org/register', color: 'border-amber-400' },
          { icon: '📊', label: '応募状況確認', desc: '現在の申込み状況を確認する', path: '/org/status', color: 'border-blue-400' },
          { icon: '📋', label: '活動後報告', desc: '活動終了後に報告を入力する', path: '/org/report', color: 'border-green-400' },
        ].map(item => (
          <button key={item.path} onClick={() => router.push(item.path)} className={`bg-white rounded-xl p-6 shadow-sm border-t-4 ${item.color} text-left hover:shadow-md transition-all`}>
            <div className="text-3xl mb-3">{item.icon}</div>
            <div className="font-bold text-gray-800 mb-1">{item.label}</div>
            <div className="text-xs text-gray-500">{item.desc}</div>
          </button>
        ))}
      </div>
    </OrgLayout>
  )
}