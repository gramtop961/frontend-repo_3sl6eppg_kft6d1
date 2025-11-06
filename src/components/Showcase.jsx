import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    title: 'Nova One – AI Ear Companion',
    price: '$179',
    img: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Halo Dock – Magnetic Base',
    price: '$89',
    img: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Pulse Band – Haptic Control',
    price: '$129',
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Aether Case – Soft Touch',
    price: '$39',
    img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative mx-auto max-w-7xl px-4 pb-24 md:px-6">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Fresh drops</h2>
          <p className="mt-1 text-white/70">Limited runs, premium materials, designed for AI life.</p>
        </div>
        <a href="#" className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur hover:bg-white/10 sm:inline-flex">View all</a>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={it.img} alt={it.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-90" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-white">{it.title}</h3>
                  <p className="text-xs text-white/70">{it.price}</p>
                </div>
                <button className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black shadow hover:bg-white/90">Add</button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
