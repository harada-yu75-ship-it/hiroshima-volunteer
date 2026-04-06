'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function StudentLogin() {
  const [step, setStep] = useState<'info' | 'pin'>('info')
  const [name, setName] = useState('')
  const [grade, setGrade] = useState('')
  const [cls, setCls] = useState('')
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleInfo = () => {
    if (!name) { setError('❌ 氏名を入力してください'); return }
    if (!grade) { setError('❌ 学年を選択してください'); return }
    if (!cls) { setError('❌ 組を選択してください'); return }
    setError('')
    setStep('pin')
  }

  const handlePin = () => {
    if (pin.length !== 4) { setError('❌ 4桁を入力してください'); return }
    router.push('/student/browse')
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-green-700 to-green-400">
      <div className="bg-white rounded-2xl p-10 w-full max-w-sm shadow-2xl text-center">
        <div className="text-4xl mb-3">🧑‍🎒</div>
        <div className="text-lg font-bold text-gray-800 mb-1">生徒ログイン</div>
        {step === 'info' ? (
          <>
            <div className="text-xs text-gray-500 mb-6">名前・学年・組を入力してください</div>
            <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3 text-xs text-yellow-800 mb-4 text-left">
              ⚠️ スペースなしで入力してください。<br />例：<strong>広島一郎</strong>（○）　広島   一郎（×）
            </div>
            <div className="space-y-3 text-left">
              <div>
                <label className="text-xs font-bold text-gray-600 block mb-1">氏名 *</label>
                <input value={name} onChange={e => setName(e.target.value)} className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-green-400" placeholder="例：広島一郎" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-gray-600 block mb-1">学年 *</label>
                  <select value={grade} onChange={e => setGrade(e.target.value)} className="w-full border-2 border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-green-400">
                    <option value="">選択</option>
                    <option>1年</option><option>2年</option><option>3年</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-600 block mb-1">組 *</label>
                  <select value={cls} onChange={e => setCls(e.target.value)} className="w-full border-2 border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-green-400">
                    <option value="">選択</option>
                    <option>1組</option><option>2組</option><option>3組</option><option>4組</option>
                    <option>5組</option><option>6組</option><option>7組</option><option>8組</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="text-xs text-red-500 mt-2 h-4">{error}</div>
            <button onClick={handleInfo} className="w-full bg-green-700 text-white font-bold py-3 rounded-xl hover:bg-green-900 mt-2">次へ →</button>
          </>
        ) : (
          <>
            <div className="text-xs text-gray-500 mb-2">{name}（{grade}{cls}）</div>
            <div className="text-sm text-gray-600 mb-4">4桁のパスワードを入力してください</div>
            <input
              type="password"
              maxLength={4}
              value={pin}
              onChange={e => setPin(e.target.value.replace(/\D/g, ''))}
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-center text-2xl tracking-widest mb-2 outline-none focus:border-green-400"
              placeholder="••••"
            />
            <div className="text-xs text-red-500 mb-3 h-4">{error}</div>
            <button onClick={handlePin} className="w-full bg-green-700 text-white font-bold py-3 rounded-xl hover:bg-green-900">ログイン</button>
            <button onClick={() => setStep('info')} className="mt-2 text-xs text-gray-400 hover:text-green-700">← 名前入力に戻る</button>
          </>
        )}
        <button onClick={() => router.push('/')} className="mt-3 text-xs text-gray-400 hover:text-green-700 block w-full">← ロール選択に戻る</button>
      </div>
    </main>
  )
}