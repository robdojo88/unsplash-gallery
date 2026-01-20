function SearchBar({ query, setQuery, onSearch, inputRef }) {
    return (
        <div className='flex flex-col gap-4 sm:flex-row sm:items-end'>
            <label className='flex-1'>
                <span className='text-xs font-semibold uppercase tracking-[0.25em] text-slate-400'>
                    Search
                </span>
                <input
                    ref={inputRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            onSearch(1);
                        }
                    }}
                    placeholder='Search images...'
                    className='mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-3 text-sm text-slate-100 placeholder:text-slate-500 shadow-inner outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-400/30'
                />
            </label>
            <button
                onClick={() => onSearch(1)}
                className='rounded-2xl bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-emerald-300 active:translate-y-0'
            >
                Search
            </button>
        </div>
    );
}

export default SearchBar;
