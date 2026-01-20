function CollectionsGrid({ collections, onSelect }) {
    return (
        <section
            id='collections'
            className='mt-10 rounded-3xl border border-white/10 bg-slate-900/60 p-6'
        >
            <div className='flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between'>
                <div>
                    <p className='text-xs uppercase tracking-[0.3em] text-slate-400'>
                        Collections
                    </p>
                    <h3 className='mt-2 text-xl font-semibold text-white'>
                        Curated starting points
                    </h3>
                </div>
                <p className='text-xs text-slate-400'>
                    Click a card to search instantly.
                </p>
            </div>
            <div className='mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                {collections.map((collection) => (
                    <button
                        key={collection.title}
                        onClick={() => onSelect(collection.query)}
                        className='group rounded-2xl border border-white/10 bg-white/5 p-4 text-left text-sm text-slate-200 transition hover:-translate-y-1 hover:border-emerald-300/60'
                    >
                        <p className='text-base font-semibold text-white'>
                            {collection.title}
                        </p>
                        <p className='mt-2 text-xs text-slate-400'>
                            {collection.description}
                        </p>
                        <p className='mt-3 text-xs uppercase tracking-[0.2em] text-emerald-300'>
                            {collection.query}
                        </p>
                    </button>
                ))}
            </div>
        </section>
    );
}

export default CollectionsGrid;
