'use client'
import { useRouter, usePathname } from 'next/navigation'

const navItems = [
  { icon: '📊', label: 'ダッシュボード', path: '/school/dashboard' },
  { icon: '📥', label: '承認待ちオファー', path: '/school/pending' },
  { icon: '📋', label: 'オファー一覧', path: '/school/offers' },
  { icon: '👥', label: '申込者集約', path: '/school/applicants' },
  { icon: '📢', label: '告知・連絡', path: '/school/notify' },
  { icon: '🧑‍🎒', label: '生徒参加状況', path: '/school/students' },
  { icon: '📋', label: '活動報告一覧', path: '/school/reports' },
  { icon: '📄', label: '活動実績レポート', path: '/school/report' },
  { icon: '🔍', label: '生徒PW検索', path: '/school/pwsearch' },
]

export default function SchoolLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-green-800 text-white px-6 h-14 flex items-center justify-between sticky top-0 z-10">
        <div className="font-bold text-lg">🌿 ボランティアMatch — 学校担当</div>
        <button onClick={() => router.push('/')} className="text-xs border border-white/50 px-3 py-1 rounded-lg hover:bg-white/20">ログアウト</button>
      </header>
      <div className="flex">
        <aside className="w-56 bg-white border-r border-gray-200 min-h-screen p-4 flex-shrink-0">
          <nav className="space-y-1">
            {navItems.map(item => (
              <button
                key={item.path}
                onClick={() => router.push(item.path)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all border-l-2 ${
                  pathname === item.path
                    ? 'bg-green-50 text-green-700 font-bold border-green-600'
                    : 'text-gray-600 hover:bg-green-50 hover:text-green-700 border-transparent'
                }`}
              >
                <span>{item.icon}</span>{item.label}
              </button>
            ))}
          </nav>
        </aside>
        <main className="flex-1 p-7">{children}</main>
      </div>
    </div>
  )
}