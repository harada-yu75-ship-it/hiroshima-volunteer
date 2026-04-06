'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function OrgReportPage() {
  const router = useRouter()
  const [form, setForm] = useState({ actual_count: '', rating: '', want_again: '', report_activity: '', report_good: '', report_improve: '', report_message: '' })
  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

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
        <main className="flex-1 p-7 max-w-2xl">
          <div className="text-2xl font-bold text-gray-800 mb-1">活動後報告</div>
          <div className="text-sm text-gray-500 mb-6">活動終了後に内容を入力して学校に報告してください</div>
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-5">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-bold text-gray-600 block mb-1">実際の参加人数</label>
                <input type="number" value={form.actual_count} onChange={e => update('actual_count', e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" placeholder="0" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-600 block mb-1">活動の評価</label>
                <select value={form.rating} onChange={e => update('rating', e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm">
                  <option value="">選択</option>
                  <option value="5">5：とても良かった</option>
                  <option value="4">4：良かった</option>
                  <option value="3">3：普通</option>
                  <option value="2">2：やや課題あり</option>
                  <option value="1">1：課題あり</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-600 block mb-1">次回も依頼したいか</label>
                <select value={form.want_again} onChange={e => update('want_again', e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm">
                  <option value="">選択</option>
                  <option value="yes">ぜひまたお願いしたい</option>
                  <option value="either">どちらでも</option>
                  <option value="review">要検討</option>
                </select>
              </div>
            </div>
            {[
              { key: 'report_activity', label: '活動の様子', placeholder: '生徒の取り組みの様子など具体的に教えてください' },
              { key: 'report_good', label: '良かった点', placeholder: '特に印象に残った良い点を教えてください' },
              { key: 'report_improve', label: '改善してほしい点・要望', placeholder: '次回に向けて改善してほしい点があればご記入ください' },
              { key: 'report_message', label: '学校へのメッセージ', placeholder: '学校担当の先生へのメッセージをどうぞ' },
            ].map(f => (
              <div key={f.key}>
                <label className="text-xs font-bold text-gray-600 block mb-1">{f.label}</label>
                <textarea value={form[f.key as keyof typeof form]} onChange={e => update(f.key, e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm resize-none" rows={3} placeholder={f.placeholder} />
              </div>
            ))}
            <div className="flex gap-3">
              <button className="bg-gray-200 text-gray-700 font-bold px-5 py-2.5 rounded-xl hover:bg-gray-300 text-sm">💾 下書き保存</button>
              <button className="bg-green-700 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-green-900 text-sm">📤 提出する</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}