function ResultsMeta({ imagesLength, currentPage, totalPages }) {
    return (
        <div className='mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400'>
            <span>
                {imagesLength ? `${imagesLength} results` : 'Type a theme to get started.'}
            </span>
            <span>
                Page {currentPage} of {totalPages}
            </span>
        </div>
    );
}

export default ResultsMeta;
