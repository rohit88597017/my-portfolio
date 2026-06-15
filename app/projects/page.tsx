import Link from "next/link";

export default function ProjectsPage() {
    return (
        <section className="py-18 px-3">
            <h1 className="text-3xl font-bold tracking-tight mb-8">
                My Projects
            </h1>
            <div className="grid gap-6 sm:grid-cols-2">
                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <h2 className="text-xl font-bold text-slate-900">
                        Next.js App Router Platform
                    </h2>
                    <p className="mt-2 text-sm text-slate-600">
                        Deep folder-based link mapping project.
                    </p>
                    <Link href="/contact" className="mt-4 inline-block text-sm text-blue-600 font-medium hover:underline">
                        Inquire about this project&rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
}