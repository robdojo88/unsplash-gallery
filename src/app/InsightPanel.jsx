function InsightPanel() {
    return (
        <div className='rounded-3xl border border-white/10 bg-slate-900/70 p-6 text-sm text-slate-300'>
            <p className='text-xs uppercase tracking-[0.3em] text-slate-400'>
                Insight
            </p>
            <div className='mt-4 space-y-4'>
                <div>
                    <p className='text-lg font-semibold text-white'>24</p>
                    <p className='text-xs text-slate-400'>Images per search</p>
                </div>
                <div className='h-px bg-white/10' />
                <div>
                    <p className='text-lg font-semibold text-white'>Unsplash</p>
                    <p className='text-xs text-slate-400'>Trusted provider</p>
                </div>
            </div>
        </div>
    );
}

export default InsightPanel;
