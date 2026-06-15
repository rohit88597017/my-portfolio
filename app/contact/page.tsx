export default function ContactPage() {
    return (
        <section className="py-18 px-3 max-w-md space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    Let's Conect
                </h1>
                <p className="text-slate-600 text-sm mt-1">
                    Fill out the fast-route contact gate below.
                </p>
            </div>
            <form action="#" className="space-y-4">
                <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                        Message
                    </label>
                    <textarea rows={4} className="w-full p-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 text-slate-700 transition" placeholder="Your idea..."></textarea>
                </div>
                <button type="submit" className="w-full py-3 bg-slate-950 text-white font-medium text-sm rounded-xl hover:bg-slate-800 transition">
                    Send Route Signal
                </button>
            </form>
        </section>
    );
}