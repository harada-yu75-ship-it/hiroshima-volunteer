'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function OrgLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = () => {
    if (password === 'offer2025') {
      router.push('/org/dashboard')
    } else {
      setError('❌ パスワードが正しくありません')
      setPassword('')
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-green-700 to-green-400">
      <div className="bg-white rounded-2xl p-10 w-full max-w-sm shadow-2xl text-center">
        <div className="text-4xl mb-3">🏢</div>
        <div className="text-lg font-bold text-gray-800 mb-1">オファー先ログイン</div>
        <div className="text-xs text-gray-500 mb-6">パスワードを入力してください</div>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleLogin()}
          placeholder="パスワード"
          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-center text-lg tracking-widest mb-2 outline-none focus:border-green-400"
        />
        <div className="text-xs text-red-500 mb-3 h-4">{error}</div>
        <button onClick={handleLogin} className="w-full bg-amber-500 text-white font-bold py-3 rounded-xl hover:bg-amber-700">ログイン</button>
        <button onClick={() => router.push('/')} className="mt-3 text-xs text-gray-400 hover:text-green-700">← ロール選択に戻る</button>
      </div>
    </main>
  )
}