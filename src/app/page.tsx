import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-green-700 to-green-400">
      <div className="bg-white rounded-2xl p-12 w-full max-w-md shadow-2xl text-center">
        <div className="text-3xl font-bold text-green-800 mb-2">
          🌿 ボランティアMatch
        </div>
        <div className="text-sm text-gray-500 mb-8">
          中学校ボランティアマッチングシステム
        </div>
        <p className="text-sm text-gray-600 mb-6">
          ログインするロールを選択してください
        </p>
        <div className="grid grid-cols-1 gap-3">
          <Link href="/school" className="flex items-center gap-4 border-2 border-gray-200 rounded-xl p-4 hover:border-green-400 hover:bg-green-50 transition-all">
            <span className="text-3xl">🏫</span>
            <div className="text-left">
              <div className="font-bold text-gray-800">学校担当</div>
              <div className="text-xs text-gray-500">教諭・管理職</div>
            </div>
          </Link>
          <Link href="/student" className="flex items-center gap-4 border-2 border-gray-200 rounded-xl p-4 hover:border-green-400 hover:bg-green-50 transition-all">
            <span className="text-3xl">🧑‍🎒</span>
            <div className="text-left">
              <div className="font-bold text-gray-800">生　徒</div>
              <div className="text-xs text-gray-500">参加申込み</div>
            </div>
          </Link>
          <Link href="/org" className="flex items-center gap-4 border-2 border-gray-200 rounded-xl p-4 hover:border-green-400 hover:bg-green-50 transition-all">
            <span className="text-3xl">🏢</span>
            <div className="text-left">
              <div className="font-bold text-gray-800">オファー先</div>
              <div className="text-xs text-gray-500">地域・団体</div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}