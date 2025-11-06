import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: "100%", height: "100%" }} />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-white/10 to-white/80 dark:from-zinc-950/60 dark:via-zinc-950/10 dark:to-zinc-950/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 grid lg:grid-cols-2 items-center gap-10">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white"
          >
            Next‑gen tech, crafted for the bold
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 max-w-xl"
          >
            Explore premium devices, pro accessories and playful interactive experiences. Built with performance and design at the forefront.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#products" className="inline-flex items-center justify-center rounded-full bg-zinc-900 text-white px-6 py-3 text-sm font-medium shadow-lg shadow-zinc-900/10 hover:shadow-zinc-900/20">
              Shop the drop
            </a>
            <a href="#new" className="inline-flex items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50">
              What's new
            </a>
          </motion.div>
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>
  );
}
