'use client'
import { useState } from 'react'
import SchoolLayout from '@/components/SchoolLayout'

export default function PwSearchPage() {
  const [name, setName] = useState('')
  const [grade, setGrade] = useState('')
  const [cls, setCls] = useState('')
  const [result, setResult] = useState<string | null>(null)

  const handleSearch = () => {
    setResult(`${name}（${grade}-${cls}組）のパスワードはSupabaseに保存されています。`)
  }

  return (
    <SchoolLayout>
      <div className="text-2xl font-bold text-gray-800 mb-1">生徒PW検索</div>
      <div className="text-sm text-gray-500 mb-6">生徒のパスワードを氏名・学年・組から検索できます</div>
      <div className="bg-white rounded-xl shadow-sm p-6 max-w-lg">
        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold text-gray-600 block mb-1">氏名（スペースなし）</label>
            <input value={name} onChange={e => setName(e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" placeholder="例：原田悠" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-gray-600 block mb-1">学年</label>
              <select value={grade} onChange={e => setGrade(e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm">
                <option value="">選択</option>
                <option>1</option><option>2</option><option>3</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-gray-600 block mb-1">組</label>
              <select value={cls} onChange={e => setCls(e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm">
                <option value="">選択</option>
                <option>1</option><option>2</option><option>3</option><option>4</option>
                <option>5</option><option>6</option><option>7</option><option>8</option>
              </select>
            </div>
          </div>
          <button onClick={handleSearch} className="bg-green-700 text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-green-900">🔍 検索</button>
          {result && (
            <div className="bg-teal-50 border border-teal-300 rounded-xl p-4 text-center">
              <div className="text-sm font-bold text-teal-800">{result}</div>
            </div>
          )}
        </div>
      </div>
    </SchoolLayout>
  )
}