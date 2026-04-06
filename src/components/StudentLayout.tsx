'use client'
import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

const navItems = [
  { icon: '🔍', label: 'ボランティアを探す', path: '/student/browse' },
  { icon: '✅', label: '申込み状況', path: '/student/applies' },
  { icon: '🏅', label: '活動記録', path: '/student/record' },
]

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-700 text-white px-4 h-14 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-xl md:hidden">☰</button>
          <div className="font-bold text-sm md:text-base whitespace-nowrap">🌿 ボランティアMatch</div>
        </div>
        <button onClick={() => router.push('/')} className="text-xs border border-white/50 px-2 py-1 rounded-lg hover:bg-white/20 whitespace-nowrap">ログアウト</button>
      </header>
      <div className="flex">
        {menuOpen && (
          <div className="fixed inset-0 bg-black/40 z-10 md:hidden" onClick={() => setMenuOpen(false)} />
        )}
        <aside className={`
          fixed top-14 left-0 h-full w-56 bg-white border-r border-gray-200 p-4 z-10 transition-transform
          md:static md:translate-x-0 md:flex-shrink-0
          ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <nav className="space-y-1">
            {navItems.map(item => (
              <button
                key={item.path}
                onClick={() => { router.push(item.path); setMenuOpen(false) }}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all border-l-2 ${
                  pathname === item.path
                    ? 'bg-blue-50 text-blue-700 font-bold border-blue-600'
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-700 border-transparent'
                }`}
              >
                <span>{item.icon}</span>{item.label}
              </button>
            ))}
          </nav>
        </aside>
        <main className="flex-1 p-4 md:p-7 min-w-0">{children}</main>
      </div>
    </div>
  )
}