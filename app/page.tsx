import Link from "next/link";

export default function HomePage() {
  return (
    <section className="py-18 px-3 flex flex-col items-start gap-4">
      <h1 className="text-5xl font-extrabold sm:text-7xl tracking-tight">
        Modern Developer Portfolio
      </h1>
      <p className="text-lg text-slate-600 max-w-xl">
        Welcome to my highly optimized, route-segmented modern dashboard portfolio built from scratch.
      </p>
      <Link href="/projects" className="mt-4 px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition">
        Check Out My Projects &rarr;
      </Link>
    </section>
  );
}