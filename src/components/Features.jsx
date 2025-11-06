import React from 'react';
import { Cpu, ShieldCheck, Zap, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Cpu className="h-5 w-5" />,
    title: 'AI-Ready Performance',
    desc: 'Optimized silicon and thermals for real-time voice, vision, and LLM workloads.',
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: 'Secure by Default',
    desc: 'Hardware-level encryption, privacy switches, and verified firmware.',
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: 'Fast & Efficient',
    desc: 'All-day battery with rapid charge, Wi‑Fi 7, and sub-10ms local latency.',
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'Premium Build',
    desc: 'Minimal, precision-milled chassis with soft-touch finishes and ambient glow.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Why choose NovaTech</h2>
        <p className="mt-3 text-white/70">Purpose-built devices that make AI feel effortless and human.</p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <div key={i} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur transition hover:bg-white/[0.05]">
            <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/30 via-purple-500/30 to-cyan-400/30 text-white">
              {f.icon}
            </div>
            <h3 className="text-sm font-semibold text-white">{f.title}</h3>
            <p className="mt-1 text-sm leading-6 text-white/70">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
