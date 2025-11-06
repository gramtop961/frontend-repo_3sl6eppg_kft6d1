import { motion } from "framer-motion";

const products = [
  {
    name: "Nebula Pro Headset",
    tag: "Spatial Audio",
    img: "https://images.unsplash.com/photo-1518446258860-7f07b6148e30?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Flux Mechanical Keyboard",
    tag: "Hot‑swappable",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Ion Max Laptop",
    tag: "RTX Studio",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function Showcase() {
  return (
    <section id="new" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Fresh drops
            </h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              Limited runs, bold finishes and performance tuned.
            </p>
          </div>
          <a href="#" className="hidden sm:inline-flex rounded-full border border-zinc-300 dark:border-zinc-700 px-5 py-2 text-sm text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50">
            View all
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, idx) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <span className="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs text-zinc-700 dark:text-zinc-300">
                  {p.tag}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-zinc-900 dark:text-white">
                  {p.name}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
