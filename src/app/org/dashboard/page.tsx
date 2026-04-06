'use client'
import { useRouter } from 'next/navigation'

export default function OrgDashboard() {
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
          <div className="text-2xl font-bold text-gray-800 mb-1">オファー先メニュー</div>
          <div className="text-sm text-gray-500 mb-6">左のメニューから操作してください</div>
          <div className="grid grid-cols-3 gap-4">
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
        </main>
      </div>
    </div>
  )
}