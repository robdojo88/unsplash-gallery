function Pagination({ currentPage, totalPages, pageNumbers, onPage }) {
    return (
        <div className='mt-8 flex flex-wrap items-center justify-center gap-3 text-sm'>
            <button
                onClick={() => onPage(currentPage - 1)}
                disabled={currentPage <= 1}
                className='rounded-full border border-white/10 px-4 py-2 text-slate-200 transition hover:border-emerald-300 hover:text-emerald-100 disabled:cursor-not-allowed disabled:opacity-40'
            >
                Previous
            </button>
            {pageNumbers.map((page) => (
                <button
                    key={page}
                    onClick={() => onPage(page)}
                    className={`rounded-full px-4 py-2 transition ${
                        page === currentPage
                            ? 'bg-emerald-400 text-slate-950'
                            : 'border border-white/10 text-slate-200 hover:border-emerald-300 hover:text-emerald-100'
                    }`}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() => onPage(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className='rounded-full border border-white/10 px-4 py-2 text-slate-200 transition hover:border-emerald-300 hover:text-emerald-100 disabled:cursor-not-allowed disabled:opacity-40'
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;
