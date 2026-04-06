'use client'
import { useRouter } from 'next/navigation'

export default function OrgStatusPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-amber-600 text-white px-6 h-14 flex items-center justify-between sticky top-0 z-10">
        <div className="font-bold text-lg">🌿 ボランティアMatch — オファー先</div>
        <button onClick={() => router.push('/')} className="text-xs border border-white/50 px-3 py-1 rounded-lg hover:bg-white/20">ログアウト</button>
      </header>
      <div className="flex">
        <aside className="w-56 bg-white border-r border-gray-200 min-h-screen p-4 flex-shrink-0">
          <nav className="space-y-1">
            {[
              { icon: '✏️', label: 'オファー登録', path: '/org/register' },
              { icon: '📊', label: '応募状況確認', path: '/org/status' },
              { icon: '📋', label: '活動後報告', path: '/org/report' },
            ].map(item => (
              <button key={item.path} onClick={() => router.push(item.path)} className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-amber-50 hover:text-amber-700">
                <span>{item.icon}</span>{item.label}
              </button>
            ))}
          </nav>
        </aside>
        <main className="flex-1 p-7">
          <div className="text-2xl font-bold text-gray-800 mb-1">応募状況確認</div>
          <div className="text-sm text-gray-500 mb-6">あなたの団体のオファーへの応募状況です</div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-sm text-gray-500">
            まだ公開中のオファーはありません
          </div>
        </main>
      </div>
    </div>
  )
}
