'use client';

import { useState, useEffect } from 'react';

const STEPS = [
  { label: 'Write', message: '' },
  { label: 'Write', message: 'Closing at 3pm today due' },
  { label: 'Write', message: 'Closing at 3pm today due to weather' },
  { label: 'AI Polish', message: '❄️ Heads up — we\'re closing at 3pm today due to weather. Stay safe and we\'ll see you tomorrow!' },
  { label: 'Pick Channels', message: '❄️ Heads up — we\'re closing at 3pm today due to weather. Stay safe and we\'ll see you tomorrow!' },
  { label: 'Send', message: '❄️ Heads up — we\'re closing at 3pm today due to weather. Stay safe and we\'ll see you tomorrow!' },
  { label: 'Done', message: '❄️ Heads up — we\'re closing at 3pm today due to weather. Stay safe and we\'ll see you tomorrow!' },
];

function AnimatedDemo() {
  const [step, setStep] = useState(0);
  const [channelsSelected, setChannelsSelected] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const [aiActive, setAiActive] = useState(false);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    // Step 0: blank
    timers.push(setTimeout(() => setStep(1), 800));
    // Step 1: typing partial
    timers.push(setTimeout(() => setStep(2), 2200));
    // Step 2: full message typed
    timers.push(setTimeout(() => { setStep(3); setAiActive(true); }, 3800));
    // Step 3: AI polish applied
    timers.push(setTimeout(() => { setStep(4); setChannelsSelected(['facebook']); }, 5800));
    timers.push(setTimeout(() => setChannelsSelected(['facebook', 'instagram']), 6400));
    timers.push(setTimeout(() => setChannelsSelected(['facebook', 'instagram', 'google']), 6900));
    timers.push(setTimeout(() => setChannelsSelected(['facebook', 'instagram', 'google', 'website']), 7400));
    // Step 5: send
    timers.push(setTimeout(() => { setStep(5); }, 8400));
    // Step 6: done
    timers.push(setTimeout(() => { setStep(6); setSent(true); }, 9400));
    // Reset loop
    timers.push(setTimeout(() => {
      setStep(0); setChannelsSelected([]); setSent(false); setAiActive(false);
    }, 13000));
    
    const loop = setInterval(() => {
      setStep(0); setChannelsSelected([]); setSent(false); setAiActive(false);
      const t2: NodeJS.Timeout[] = [];
      t2.push(setTimeout(() => setStep(1), 800));
      t2.push(setTimeout(() => setStep(2), 2200));
      t2.push(setTimeout(() => { setStep(3); setAiActive(true); }, 3800));
      t2.push(setTimeout(() => { setStep(4); setChannelsSelected(['facebook']); }, 5800));
      t2.push(setTimeout(() => setChannelsSelected(['facebook', 'instagram']), 6400));
      t2.push(setTimeout(() => setChannelsSelected(['facebook', 'instagram', 'google']), 6900));
      t2.push(setTimeout(() => setChannelsSelected(['facebook', 'instagram', 'google', 'website']), 7400));
      t2.push(setTimeout(() => { setStep(5); }, 8400));
      t2.push(setTimeout(() => { setStep(6); setSent(true); }, 9400));
      timers.push(...t2);
    }, 13000);

    return () => { timers.forEach(clearTimeout); clearInterval(loop); };
  }, []);

  const currentMessage = STEPS[Math.min(step, STEPS.length - 1)].message;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden max-w-lg mx-auto">
      {/* Mock app header */}
      <div className="bg-[#1B5A8E] px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">A</span>
          </div>
          <span className="text-white text-sm font-semibold">Aiceless</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 bg-white/30 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-white/30 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-white/30 rounded-full"></div>
        </div>
      </div>

      <div className="p-5 space-y-4">
        {/* Message area */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Your Message</label>
            <div className={`flex items-center gap-1.5 transition-opacity duration-300 ${aiActive ? 'opacity-100' : 'opacity-40'}`}>
              <span className="text-xs text-gray-500">AI</span>
              <div className={`w-8 h-4 rounded-full transition-colors duration-300 ${aiActive ? 'bg-[#1B5A8E]' : 'bg-gray-300'}`}>
                <div className={`w-3 h-3 bg-white rounded-full shadow mt-0.5 transition-transform duration-300 ${aiActive ? 'translate-x-4 ml-0.5' : 'translate-x-0.5'}`}></div>
              </div>
            </div>
          </div>
          <div className={`border rounded-xl p-3 min-h-[72px] text-sm transition-all duration-500 ${step >= 3 ? 'border-[#1B5A8E] bg-blue-50/30' : 'border-gray-200 bg-white'}`}>
            <span className="text-gray-800 leading-relaxed">
              {currentMessage}
              {(step === 1 || step === 2) && <span className="inline-block w-0.5 h-4 bg-[#1B5A8E] ml-0.5 animate-pulse align-text-bottom"></span>}
            </span>
            {!currentMessage && <span className="text-gray-300 text-sm">Type your business alert...</span>}
          </div>
          {step === 3 && (
            <div className="flex items-center gap-1.5 mt-1.5 animate-fadeIn">
              <svg className="w-3.5 h-3.5 text-[#1B5A8E]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              <span className="text-xs text-[#1B5A8E] font-medium">AI enhanced — Neutral tone</span>
            </div>
          )}
        </div>

        {/* Channels */}
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">Channels</label>
          <div className="grid grid-cols-4 gap-2">
            {[
              { key: 'facebook', label: 'Facebook', color: '#1877F2' },
              { key: 'instagram', label: 'Instagram', color: '#E1306C' },
              { key: 'google', label: 'Google', color: '#34A853' },
              { key: 'website', label: 'Website', color: '#1B5A8E' },
            ].map(ch => (
              <div key={ch.key} className={`py-2 px-1 rounded-lg text-center text-xs font-semibold border transition-all duration-300 ${channelsSelected.includes(ch.key) ? 'text-white shadow-sm scale-[1.02]' : 'text-gray-400 border-gray-200 bg-white'}`}
                style={channelsSelected.includes(ch.key) ? { backgroundColor: ch.color, borderColor: ch.color } : {}}>
                {ch.label}
              </div>
            ))}
          </div>
        </div>

        {/* Send button */}
        <button className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-500 ${sent ? 'bg-green-500 text-white' : step >= 5 ? 'bg-[#1B5A8E] text-white animate-pulse' : 'bg-gray-100 text-gray-400'}`}>
          {sent ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              Sent to 4 platforms!
            </span>
          ) : step >= 5 ? 'Sending...' : 'Review Alert'}
        </button>
      </div>
    </div>
  );
}

export default function ProductPage() {
  return (
    <div>
      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-6px); } }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>

      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1B5A8E]/10 text-[#1B5A8E] rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                See it in action
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                From &quot;we&apos;re closed today&quot; to <span className="text-[#1B5A8E]">every platform</span> in 30 seconds
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Type one message. Pick your channels. Hit send. That&apos;s it — your customers on Facebook, Instagram, Google, and your website all see the same alert, instantly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://app.aiceless.com/signup" className="px-6 py-3 bg-[#1B5A8E] text-white rounded-xl hover:bg-[#164a75] transition font-semibold text-center shadow-md">
                  Try It Free for 7 Days
                </a>
                <a href="/pricing" className="px-6 py-3 bg-white text-[#1B5A8E] border-2 border-[#1B5A8E] rounded-xl hover:bg-gray-50 transition font-semibold text-center">
                  View Pricing
                </a>
              </div>
            </div>
            <div className="animate-float">
              <AnimatedDemo />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - 3 Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Three steps. That&apos;s the whole product.</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">No training required. No 30-minute onboarding call. If you can type a text message, you can use Aiceless.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#1B5A8E]/5 to-[#2D7E8C]/5 rounded-2xl p-8 border border-gray-100 h-full">
                <div className="w-12 h-12 bg-[#1B5A8E] rounded-xl flex items-center justify-center text-white font-bold text-lg mb-5 shadow-md">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Write your alert</h3>
                <p className="text-gray-600 leading-relaxed">
                  Type what you need to say. &quot;Closed early today,&quot; &quot;Back open Monday,&quot; &quot;Flash sale until 5pm&quot; — whatever it is.
                </p>
                <div className="mt-4 bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
                  <p className="text-sm text-gray-400 italic">Optional: flip on the AI toggle to polish your message in one click</p>
                </div>
              </div>
              <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                <svg className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/></svg>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#1B5A8E]/5 to-[#2D7E8C]/5 rounded-2xl p-8 border border-gray-100 h-full">
                <div className="w-12 h-12 bg-[#1B5A8E] rounded-xl flex items-center justify-center text-white font-bold text-lg mb-5 shadow-md">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pick your channels</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tap the platforms you want to post to. Facebook, Instagram, Google Business Profile, your website — any combination.
                </p>
                <div className="mt-4 flex gap-2">
                  {['Facebook', 'Instagram', 'Google', 'Website'].map(p => (
                    <span key={p} className="px-2.5 py-1 bg-[#1B5A8E] text-white rounded-lg text-xs font-semibold shadow-sm">{p}</span>
                  ))}
                </div>
              </div>
              <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                <svg className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/></svg>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="bg-gradient-to-br from-[#1B5A8E]/5 to-[#2D7E8C]/5 rounded-2xl p-8 border border-gray-100 h-full">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-5 shadow-md">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hit send</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your alert goes live everywhere at once. Customers see it on Facebook, in their Instagram feed, on Google Maps, and on your website. Done.
                </p>
                <div className="mt-4 bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
                  <p className="text-sm text-gray-400 italic">Set it to auto-expire, or schedule it for later — your choice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where Your Alerts Appear */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">One message, four platforms</h2>
            <p className="text-lg text-gray-500">Here&apos;s where your customers will see it</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Facebook */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1877F2] rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Facebook Page</h3>
                  <p className="text-xs text-gray-500">Posts as a page update</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div><p className="text-xs font-semibold text-gray-700">Your Business</p><p className="text-[10px] text-gray-400">Just now</p></div>
                </div>
                <p className="text-sm text-gray-700">❄️ Heads up — we&apos;re closing at 3pm today due to weather. Stay safe!</p>
              </div>
              <p className="text-xs text-gray-500 mt-3">Supports text posts and photo uploads</p>
            </div>

            {/* Instagram */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FCAF45] rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Instagram</h3>
                  <p className="text-xs text-gray-500">Stories + Feed Posts</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                <div className="bg-gradient-to-b from-[#1B5A8E] to-[#164a75] rounded-lg p-4 text-center">
                  <p className="text-white text-sm font-medium leading-relaxed">❄️ Closing at 3pm today<br/>due to weather</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">Design stories with custom colors, fonts &amp; images</p>
            </div>

            {/* Google */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Google Business</h3>
                  <p className="text-xs text-gray-500">Shows in Search &amp; Maps</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Updates · Your Business</p>
                <p className="text-sm text-gray-700">❄️ Heads up — we&apos;re closing at 3pm today due to weather. Stay safe!</p>
                <p className="text-[10px] text-gray-400 mt-1">Posted just now</p>
              </div>
              <p className="text-xs text-gray-500 mt-3">Appears in the &quot;Updates&quot; section of your listing</p>
            </div>

            {/* Website */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1B5A8E] rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Your Website</h3>
                  <p className="text-xs text-gray-500">Banner widget</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
                <div className="bg-gray-900 text-white text-sm py-2.5 px-4 text-center font-medium">
                  ❄️ Closing at 3pm today due to weather. Stay safe!
                </div>
                <div className="p-3">
                  <div className="h-2 w-3/4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-2 w-1/2 bg-gray-200 rounded mb-2"></div>
                  <div className="h-2 w-2/3 bg-gray-200 rounded"></div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">One line of code. Customize colors &amp; fonts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built for speed, not complexity</h2>
            <p className="text-lg text-gray-500">Every feature exists to save you time</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: '✨', title: 'AI Text Enhancement', desc: 'Toggle on the AI rewriter to polish your message. Pick a tone — neutral, fun, urgent, formal — and it rewrites in one click. You always see the result before sending.' },
              { icon: '⏰', title: 'Schedule & Auto-Expire', desc: 'Set an alert to go live at a specific time, or auto-remove after a set duration. Snow day alert at 6am that disappears by 5pm? Done.' },
              { icon: '🎨', title: 'Instagram Designer', desc: 'Create branded Instagram Stories and feed posts with custom colors, fonts, and background images — right inside the app. No Canva needed.' },
              { icon: '📊', title: 'Alert History', desc: 'See every alert you\'ve ever sent — what platform it went to, when it was posted, and whether it\'s still live or expired.' },
              { icon: '🔗', title: 'One-Click Connect', desc: 'Connect your Facebook Page, Instagram, and Google Business Profile in seconds via OAuth. No API keys, no developer setup.' },
              { icon: '🌐', title: 'Website Widget', desc: 'Copy one line of code into your site. Active alerts show as a customizable banner at the top. When the alert expires, it disappears automatically.' },
            ].map((f, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-xl hover:bg-gray-50 transition">
                <span className="text-2xl flex-shrink-0 mt-0.5">{f.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Use Cases */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for businesses like yours</h2>
          <p className="text-lg text-gray-500 mb-12">If your customers need to know something right now, Aiceless gets it done</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { emoji: '🍕', label: 'Restaurants', example: '"Kitchen closed — reopening at 5pm"' },
              { emoji: '💇', label: 'Salons', example: '"Fully booked today, call for tomorrow"' },
              { emoji: '🏪', label: 'Retail', example: '"Flash sale — 20% off until 3pm"' },
              { emoji: '🔧', label: 'Services', example: '"Running 30 min behind schedule"' },
              { emoji: '☕', label: 'Cafes', example: '"New hours: open at 7am this week"' },
              { emoji: '🏋️', label: 'Gyms', example: '"Pool closed for maintenance today"' },
              { emoji: '🐕', label: 'Pet Services', example: '"Grooming slots open this Saturday"' },
              { emoji: '🏥', label: 'Clinics', example: '"Walk-ins welcome until 4pm"' },
            ].map((uc, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm text-center">
                <span className="text-3xl mb-2 block">{uc.emoji}</span>
                <p className="font-bold text-gray-900 text-sm mb-1">{uc.label}</p>
                <p className="text-xs text-gray-500 italic leading-snug">{uc.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1B5A8E]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Try it free for 7 days</h2>
          <p className="text-lg text-white/80 mb-8">No credit card required. Set up in under 5 minutes.</p>
          <a href="https://app.aiceless.com/signup" className="inline-block px-8 py-4 bg-white text-[#1B5A8E] rounded-xl hover:bg-gray-100 transition font-bold text-lg shadow-lg">
            Start Your Free Trial
          </a>
          <p className="text-sm text-white/50 mt-4">Plans start at $20/month after trial</p>
        </div>
      </section>
    </div>
  );
}
