'use client'
import { useRouter } from 'next/navigation'

export default function RecordPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-700 text-white px-6 h-14 flex items-center justify-between sticky top-0 z-10">
        <div className="font-bold text-lg">🌿 ボランティアMatch — 生徒</div>
        <button onClick={() => router.push('/')} className="text-xs border border-white/50 px-3 py-1 rounded-lg hover:bg-white/20">ログアウト</button>
      </header>
      <div className="flex">
        <aside className="w-56 bg-white border-r border-gray-200 min-h-screen p-4 flex-shrink-0">
          <nav className="space-y-1">
            {[
              { icon: '🔍', label: 'ボランティアを探す', path: '/student/browse' },
              { icon: '✅', label: '申込み状況', path: '/student/applies' },
              { icon: '🏅', label: '活動記録', path: '/student/record' },
            ].map(item => (
              <button key={item.path} onClick={() => router.push(item.path)} className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700">
                <span>{item.icon}</span>{item.label}
              </button>
            ))}
          </nav>
        </aside>
        <main className="flex-1 p-7">
          <div className="text-2xl font-bold text-gray-800 mb-1">活動記録</div>
          <div className="text-sm text-gray-500 mb-6">あなたの活動履歴です</div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-xl p-5 shadow-sm border-t-4 border-green-400">
              <div className="text-3xl font-bold text-gray-800">0</div>
              <div className="text-xs text-gray-500 mt-1">累計活動時間（時間）</div>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border-t-4 border-blue-400">
              <div className="text-3xl font-bold text-gray-800">0</div>
              <div className="text-xs text-gray-500 mt-1">参加活動数</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100 font-bold text-gray-800">🏅 活動履歴</div>
            <div className="p-5 text-sm text-gray-500">活動記録はまだありません</div>
          </div>
        </main>
      </div>
    </div>
  )
}