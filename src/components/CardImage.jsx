function CardImage({ images }) {
    return (
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {images.map((img) => (
                <article
                    key={img.id}
                    className='group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg shadow-slate-950/40 transition hover:-translate-y-1'
                >
                    <img
                        src={img.urls.small}
                        alt={img.alt_description}
                        className='h-56 w-full object-cover transition duration-500 group-hover:scale-105'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent opacity-0 transition group-hover:opacity-100' />
                    <div className='absolute bottom-0 left-0 right-0 p-4 text-xs text-slate-200 opacity-0 transition group-hover:opacity-100'>
                        {img.alt_description || 'Untitled'}
                    </div>
                </article>
            ))}
        </div>
    );
}
export default CardImage;
