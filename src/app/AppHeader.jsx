function AppHeader({ onScrollToCollections }) {
    return (
        <header className='mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6'>
            <div className='flex items-center gap-3'>
                <div className='grid h-10 w-10 place-items-center rounded-2xl bg-emerald-400/20 text-emerald-200'>
                    UG
                </div>
                <div>
                    <p className='text-xs uppercase tracking-[0.35em] text-slate-400'>
                        Unsplash Gallery
                    </p>
                    <h1 className='text-lg font-semibold text-white'>
                        Rob Domrique
                    </h1>
                </div>
            </div>
            <button
                onClick={onScrollToCollections}
                className='rounded-full border border-emerald-400/40 px-4 py-2 text-xs font-semibold text-emerald-200 transition hover:border-emerald-300 hover:text-emerald-100'
            >
                Collections
            </button>
        </header>
    );
}

export default AppHeader;
