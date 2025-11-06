import { Cpu, Headphones, Shield, Zap } from "lucide-react";

const features = [
  {
    title: "Blazing Performance",
    desc: "Latest chipsets and thermal design for sustained speed.",
    icon: Zap,
  },
  {
    title: "Immersive Sound",
    desc: "Spatial audio tuned for music, movies and gaming.",
    icon: Headphones,
  },
  {
    title: "Pro‑grade Silicon",
    desc: "Custom CPUs and GPUs engineered for creators.",
    icon: Cpu,
  },
  {
    title: "Security First",
    desc: "Hardware root-of-trust and privacy by default.",
    icon: Shield,
  },
];

export default function Features() {
  return (
    <section id="products" className="relative py-24">
      <div className="absolute inset-x-0 -top-40 -z-[1] h-80 bg-gradient-to-b from-fuchsia-500/10 via-cyan-400/10 to-transparent blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Why choose PulseTech
        </h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Every product is designed to elevate your workflow and play with uncompromising build and materials.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-fuchsia-500/10 transition-all"
            >
              <div className="h-11 w-11 rounded-xl grid place-items-center bg-gradient-to-tr from-fuchsia-500 to-cyan-400 text-white">
                <Icon size={20} />
              </div>
              <h3 className="mt-5 font-semibold text-zinc-900 dark:text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
