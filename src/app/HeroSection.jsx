function HeroSection() {
    return (
        <div className='rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_-60px_rgba(16,185,129,0.9)] backdrop-blur sm:p-8'>
            <p className='text-xs uppercase tracking-[0.4em] text-emerald-300'>
                Curated search
            </p>
            <h2 className='mt-3 text-3xl font-semibold text-white sm:text-4xl'>
                Find the mood. Build the board.
            </h2>
            <p className='mt-3 max-w-xl text-sm text-slate-300 sm:text-base'>
                Explore premium imagery with a clean, fintech-inspired
                experience. Search by theme, vibe, or subject and curate the
                visuals you need.
            </p>
        </div>
    );
}

export default HeroSection;
