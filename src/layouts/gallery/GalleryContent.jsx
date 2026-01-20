import CardImage from '../../components/CardImage';

function GalleryContent({ isLoading, errorMessage, images }) {
    if (isLoading) {
        return (
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {Array.from({ length: 8 }, (_, idx) => (
                    <div
                        key={idx}
                        className='h-56 animate-pulse rounded-3xl border border-white/10 bg-white/5'
                    />
                ))}
            </div>
        );
    }

    if (errorMessage) {
        return (
            <div className='rounded-3xl border border-red-400/40 bg-red-500/10 p-6 text-sm text-red-200'>
                {errorMessage}
            </div>
        );
    }

    if (images.length) {
        return <CardImage images={images} />;
    }

    return (
        <div className='rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300'>
            No images found. Try another keyword or category.
        </div>
    );
}

export default GalleryContent;
