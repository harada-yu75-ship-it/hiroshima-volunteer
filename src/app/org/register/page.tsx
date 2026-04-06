'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function OrgRegisterPage() {
  const router = useRouter()
  const [form, setForm] = useState({ org: '', contact_name: '', email: '', phone: '', title: '', date: '', time_slot: '', deadline: '', slots: '', place: '', detail: '', motimono: '', fukusou: '', chui: '' })
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
        <main className="flex-1 p-7 max-w-3xl">
          <div className="text-2xl font-bold text-gray-800 mb-1">ボランティアオファー登録</div>
          <div className="text-sm text-gray-500 mb-6">活動内容を入力して学校に申請します。担当の確認後に生徒へ公開されます。</div>
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div><label className="text-xs font-bold text-gray-600 block mb-1">団体・組織名 <span className="text-red-500">*</span></label><input value={form.org} onChange={e => update('org', e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" placeholder="例：西区社会福祉協議会" /></div>
              <div><label className="text-xs font-bold text-gray-600 block mb-1">担当者名 <span className="text-red-500">*</span></label><input value={form.contact_name} onChange={e => update('contact_name', e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" placeholder="山田 太郎" /></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="text-xs font-bold text-gray-600 block mb-1">連絡先メール <span className="text-red-500">*</span></label><input type="email" value={form.email} onChange={e => update('email', e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" placeholder="example@email.com" /></div>
              <div><label className="text-xs font-bold text-gray-600 block mb-1">電話番号</label><input value={form.phone} onChange={e => update('phone', e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" placeholder="082-XXX-XXXX" /></div>
            </div>
            <hr className="border-gray-200" />
            <div><label className="text-xs font-bold text-gray-600 block mb-1">活動名 <span className="text-red-500">*</span></label><input value={form.title} onChange={e => update('title', e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" placeholder="例：夏まつり運営スタッフ" /></div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="text-xs font-bold text-gray-600 block mb-1">活動日 <span className="text-red-500">*</span></label><input type="date" value={form.date} onChange={e => update('date', e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" /></div>
              <div><label className="text-xs font-bold text-gray-600 block mb-1">活動時間</label><input value={form.time_slot} onChange={e => update('time_slot', e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" placeholder="09:00〜12:00" /></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="text-xs font-bold text-gray-600 block mb-1">申し込み締切 <span className="text-red-500">*</span><span className="text-gray-400 font-normal ml-1">（活動日より前）</span></label><input type="date" value={form.deadline} onChange={e => update('deadline', e.target.value)} className="w-full border border-yellow-300 bg-yellow-50 rounded-lg px-3 py-2 text-sm" /></div>
              <div><label className="text-xs font-bold text-gray-600 block mb-1">募集人数 <span className="text-red-500">*</span></label><input type="number" value={form.slots} onChange={e => update('slots', e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" placeholder="10" /></div>
            </div>
            <div><label className="text-xs font-bold text-gray-600 block mb-1">活動場所</label><input value={form.place} onChange={e => update('place', e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" placeholder="例：西区コミュニティセンター" /></div>
            <div className="text-xs font-bold text-gray-600 mb-2">活動内容の詳細 <span className="text-red-500">*</span></div>
            {[
              { key: 'detail', label: '📋 活動内容', placeholder: 'どのような活動をお手伝いいただくか、具体的にご記入ください' },
              { key: 'motimono', label: '🎒 持ち物', placeholder: '例：タオル、水筒（特になければ「特になし」）' },
              { key: 'fukusou', label: '👕 服装', placeholder: '例：動きやすい服装・運動靴、制服可' },
              { key: 'chui', label: '⚠️ 注意事項', placeholder: '例：雨天中止の場合は前日に連絡します' },
            ].map(f => (
              <div key={f.key} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-3 py-2 text-xs font-bold text-gray-800 border-b border-gray-200">{f.label}</div>
                <textarea value={form[f.key as keyof typeof form]} onChange={e => update(f.key, e.target.value)} className="w-full px-3 py-2 text-sm resize-none" rows={3} placeholder={f.placeholder} />
              </div>
            ))}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-800">
              📌 登録後、学校担当が内容を確認してから生徒に公開されます。内容を修正する場合がありますが、あらかじめご了承ください。
            </div>
            <button className="bg-green-700 text-white font-bold px-6 py-3 rounded-xl hover:bg-green-900">📤 申請する</button>
          </div>
        </main>
      </div>
    </div>
  )
}