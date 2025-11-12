import { useState } from 'react'

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-white/20 rounded-xl overflow-hidden bg-white/60 backdrop-blur dark:bg-neutral-900/60">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-4 sm:px-6 py-4 text-left">
        <span className="font-semibold text-neutral-900 dark:text-white">{q}</span>
        <svg className={`h-5 w-5 text-neutral-600 dark:text-neutral-300 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd"/></svg>
      </button>
      {open && (
        <div className="px-4 sm:px-6 pb-5 text-neutral-700 dark:text-neutral-300 border-t border-white/10">{a}</div>
      )}
    </div>
  )
}

function ModeCard({ title, desc, color }) {
  return (
    <div className="group relative rounded-2xl p-6 bg-white/70 dark:bg-neutral-900/60 border border-white/20 shadow-sm hover:shadow-xl transition-all overflow-hidden">
      <div className={`absolute -right-12 -top-12 h-32 w-32 rounded-full blur-3xl opacity-40 ${color}`} />
      <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-600">
        Play now
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/></svg>
      </div>
    </div>
  )}
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const modes = [
    { title: 'Battle Royale', desc: '50 players drop in. Only one squad survives. Loot, rotate, and outsmart enemies in shrinking zones.', color: 'bg-gradient-to-br from-orange-500 to-pink-600' },
    { title: 'Clash Squad', desc: 'Fast 4v4 rounds with economy. Buy, fight, and clutch your way to victory.', color: 'bg-gradient-to-br from-blue-500 to-cyan-400' },
    { title: 'Ranked', desc: 'Prove your skills. Climb tiers and earn exclusive seasonal rewards.', color: 'bg-gradient-to-br from-violet-500 to-fuchsia-500' },
  ]

  const characters = [
    { name: 'Astra', role: 'Assault', color: 'from-orange-500 to-pink-600' },
    { name: 'Viper', role: 'Scout', color: 'from-emerald-500 to-teal-500' },
    { name: 'Reign', role: 'Support', color: 'from-blue-500 to-indigo-500' },
    { name: 'Nyx', role: 'Sniper', color: 'from-fuchsia-500 to-violet-500' },
  ]

  const faqs = [
    { q: 'Is this game free to play?', a: 'Yes. Play all core modes for free. Optional cosmetics are available with no pay-to-win.' },
    { q: 'What devices are supported?', a: 'Works on modern browsers and mobile devices. For best experience, use a recent smartphone or desktop.' },
    { q: 'Do I need an account?', a: 'You can jump into casual matches instantly. Create a free account to save progress and ranked stats.' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-rose-50 to-blue-50 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/20 bg-white/60 backdrop-blur dark:bg-neutral-900/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-500 to-pink-600" />
            <span className="font-extrabold tracking-tight text-neutral-900 dark:text-white">Free Fire Hub</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {['Home','Modes','Characters','Gallery','FAQ'].map((i) => (
              <a key={i} href={`#${i.toLowerCase()}`} className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors">{i}</a>
            ))}
            <a href="#download" className="rounded-full bg-gradient-to-r from-orange-500 to-pink-600 text-white text-sm font-semibold px-4 py-2 shadow hover:shadow-md">Play Free</a>
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded hover:bg-black/5 dark:hover:bg-white/5" aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-4 pb-4">
            <div className="flex flex-col gap-2">
              {['Home','Modes','Characters','Gallery','FAQ'].map((i) => (
                <a key={i} href={`#${i.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="px-2 py-2 rounded text-sm font-medium text-neutral-700 hover:bg-black/5 dark:text-neutral-300 dark:hover:bg-white/5">{i}</a>
              ))}
              <a href="#download" onClick={() => setMenuOpen(false)} className="mt-2 rounded-lg bg-gradient-to-r from-orange-500 to-pink-600 text-white text-center text-sm font-semibold px-4 py-2 shadow">Play Free</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/70 dark:bg-neutral-900/60 border border-white/20 text-orange-600 mb-4">
              <span className="h-2 w-2 rounded-full bg-orange-500" /> Live Now
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              Drop in. Gear up. Be the last standing.
            </h1>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Welcome to Free Fire Hub — your portal to fast, tactical action. Squad up, master unique characters, and dominate every mode.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#download" className="inline-flex justify-center items-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold px-5 py-3 shadow hover:shadow-lg">
                Play Free
              </a>
              <a href="#modes" className="inline-flex justify-center items-center gap-2 rounded-lg bg-white/70 dark:bg-neutral-900/60 border border-white/20 text-neutral-900 dark:text-white font-semibold px-5 py-3">
                Explore Modes
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl border border-white/20 bg-gradient-to-br from-neutral-900 to-neutral-800 overflow-hidden shadow-xl">
              <div className="absolute inset-0 grid grid-cols-3 opacity-20">
                {[...Array(9)].map((_,i)=> (
                  <div key={i} className="border border-white/10" />
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white/80 border border-white/20 mb-3">Gameplay Preview</span>
                  <h3 className="text-white font-extrabold text-2xl">High-Octane Action</h3>
                  <p className="text-white/70 mt-1">Mobile-first performance. Crisp visuals. Smooth controls.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modes */}
      <section id="modes" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white">Game Modes</h2>
            <a href="#download" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-orange-600">Play Free <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/></svg></a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modes.map((m) => (
              <ModeCard key={m.title} title={m.title} desc={m.desc} color={m.color} />
            ))}
          </div>
        </div>
      </section>

      {/* Characters */}
      <section id="characters" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white mb-8">Featured Characters</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {characters.map((c) => (
              <div key={c.name} className="group relative rounded-2xl p-6 border border-white/20 bg-white/70 dark:bg-neutral-900/60 overflow-hidden">
                <div className={`absolute -right-10 -top-10 h-24 w-24 rounded-full blur-3xl opacity-50 bg-gradient-to-br ${c.color}`} />
                <div className="h-28 rounded-xl mb-4 bg-gradient-to-br from-neutral-800 to-neutral-700 border border-white/10" />
                <h3 className="font-bold text-neutral-900 dark:text-white">{c.name}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">{c.role}</p>
                <button className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-orange-600">Learn more <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/></svg></button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white mb-8">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-700 border border-white/10" />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white mb-6 text-center">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-8 sm:p-10 border border-white/20 bg-white/70 backdrop-blur dark:bg-neutral-900/60 text-center overflow-hidden relative">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,122,0,0.25),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.25),transparent_40%)]" />
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white">Ready to drop?</h3>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">Start playing in seconds. No downloads required — just click play.</p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold px-5 py-3 shadow hover:shadow-lg">
                Play in Browser
              </a>
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/70 dark:bg-neutral-800 border border-white/20 text-neutral-900 dark:text-white font-semibold px-5 py-3">
                Get Mobile App
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded bg-gradient-to-br from-orange-500 to-pink-600" />
            <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">Free Fire Hub</span>
          </div>
          <p className="text-xs text-neutral-500">Fan-made concept site for a battle-royale style game experience.</p>
        </div>
      </footer>
    </div>
  )
}
