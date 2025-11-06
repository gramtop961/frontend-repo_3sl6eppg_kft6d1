export default function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-sm">
        <div>
          <div className="inline-flex items-center gap-2">
            <span className="h-7 w-7 rounded-md bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-cyan-400" />
            <span className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 text-lg">PulseTech</span>
          </div>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-xs">
            High‑performance gear for creators, gamers and builders.
          </p>
        </div>

        <div>
          <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Shop</h4>
          <ul className="mt-3 space-y-2 text-zinc-600 dark:text-zinc-400">
            <li><a href="#products" className="hover:text-zinc-900 dark:hover:text-white">All Products</a></li>
            <li><a href="#deals" className="hover:text-zinc-900 dark:hover:text-white">Deals</a></li>
            <li><a href="#new" className="hover:text-zinc-900 dark:hover:text-white">New Arrivals</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Company</h4>
          <ul className="mt-3 space-y-2 text-zinc-600 dark:text-zinc-400">
            <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white">Careers</a></li>
            <li><a href="#support" className="hover:text-zinc-900 dark:hover:text-white">Support</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Newsletter</h4>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">Get early access to drops.</p>
          <form className="mt-3 flex gap-2">
            <input type="email" required placeholder="you@domain.com" className="flex-1 rounded-full border border-zinc-300 dark:border-zinc-700 bg-transparent px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-fuchsia-400" />
            <button className="rounded-full bg-zinc-900 text-white px-5 text-sm">Join</button>
          </form>
        </div>
      </div>
      <div className="py-6 text-center text-xs text-zinc-500">© {new Date().getFullYear()} PulseTech. All rights reserved.</div>
    </footer>
  );
}
