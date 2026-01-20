function CategoryChips({ categories, activeQuery, onSelect }) {
    return (
        <div className='mt-5 flex flex-wrap gap-2'>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelect(category)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                        category === activeQuery
                            ? 'border-emerald-400 bg-emerald-400 text-slate-950'
                            : 'border-white/10 text-slate-200 hover:border-emerald-300 hover:text-emerald-100'
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

export default CategoryChips;
