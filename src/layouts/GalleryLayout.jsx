import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import CardImage from '../components/CardImage';

function GalleryLayout() {
    const API_URL = 'https://api.unsplash.com/search/photos';
    const IMAGES_PER_PAGE = 24;

    const [query, setQuery] = useState('Unsplash'); // default search
    const [images, setImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const inputRef = useRef(null);

    const categories = [
        'Student & School',
        'Technology',
        'Architecture',
        'Nature',
        'Food',
        'Travel',
        'Minimal',
        'Fitness',
    ];
    const collections = [
        {
            title: 'Calm Study',
            description: 'Focus-friendly desks, books, and soft light.',
            query: 'study desk minimal',
        },
        {
            title: 'Smart Work',
            description: 'Modern tech, product shots, and sleek setups.',
            query: 'technology workspace',
        },
        {
            title: 'Urban Lines',
            description: 'Clean architecture with sharp geometry.',
            query: 'modern architecture facade',
        },
        {
            title: 'Green Escape',
            description: 'Nature scenes to reset the mood.',
            query: 'forest landscape',
        },
    ];

    const pageNumbers = (() => {
        const maxButtons = 5;
        let start = Math.max(1, currentPage - Math.floor(maxButtons / 2));
        let end = Math.min(totalPages, start + maxButtons - 1);
        start = Math.max(1, end - maxButtons + 1);
        return Array.from({ length: end - start + 1 }, (_, idx) => start + idx);
    })();

    const handleSearch = async (page = 1) => {
        if (!query) return;

        try {
            setIsLoading(true);
            setErrorMessage('');
            const { data } = await axios.get(API_URL, {
                headers: {
                    Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_API_KEY}`,
                },
                params: {
                    query,
                    page,
                    per_page: IMAGES_PER_PAGE,
                },
            });

            setImages(data.results);
            setCurrentPage(page);
            setTotalPages(Math.max(1, data.total_pages || 1));
        } catch (error) {
            console.error(error);
            setErrorMessage('Unable to load images. Please try again.');
            setImages([]);
        }
        setIsLoading(false);
    };

    // 👇 AUTO SEARCH ON LOAD
    useEffect(() => {
        handleSearch(1);
    }, []);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div className='pb-10'>
            <div className='rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_20px_70px_-40px_rgba(45,212,191,0.9)] backdrop-blur sm:p-6'>
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
                                    handleSearch(1);
                                }
                            }}
                            placeholder='Search images...'
                            className='mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-3 text-sm text-slate-100 placeholder:text-slate-500 shadow-inner outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-400/30'
                        />
                    </label>
                    <button
                        onClick={() => handleSearch(1)}
                        className='rounded-2xl bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-emerald-300 active:translate-y-0'
                    >
                        Search
                    </button>
                </div>
                <div className='mt-5 flex flex-wrap gap-2'>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setQuery(category);
                                handleSearch(1);
                            }}
                            className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                                category === query
                                    ? 'border-emerald-400 bg-emerald-400 text-slate-950'
                                    : 'border-white/10 text-slate-200 hover:border-emerald-300 hover:text-emerald-100'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className='mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400'>
                    <span>
                        {images.length
                            ? `${images.length} results`
                            : 'Type a theme to get started.'}
                    </span>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                </div>
            </div>

            <div className='mt-8'>
                {isLoading ? (
                    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {Array.from({ length: 8 }, (_, idx) => (
                            <div
                                key={idx}
                                className='h-56 animate-pulse rounded-3xl border border-white/10 bg-white/5'
                            />
                        ))}
                    </div>
                ) : errorMessage ? (
                    <div className='rounded-3xl border border-red-400/40 bg-red-500/10 p-6 text-sm text-red-200'>
                        {errorMessage}
                    </div>
                ) : images.length ? (
                    <CardImage images={images} />
                ) : (
                    <div className='rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300'>
                        No images found. Try another keyword or category.
                    </div>
                )}
            </div>

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
                            onClick={() => {
                                setQuery(collection.query);
                                handleSearch(1);
                            }}
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

            {!!images.length && !isLoading && !errorMessage && (
                <div className='mt-8 flex flex-wrap items-center justify-center gap-3 text-sm'>
                    <button
                        onClick={() => handleSearch(currentPage - 1)}
                        disabled={currentPage <= 1}
                        className='rounded-full border border-white/10 px-4 py-2 text-slate-200 transition hover:border-emerald-300 hover:text-emerald-100 disabled:cursor-not-allowed disabled:opacity-40'
                    >
                        Previous
                    </button>
                    {pageNumbers.map((page) => (
                        <button
                            key={page}
                            onClick={() => handleSearch(page)}
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
                        onClick={() => handleSearch(currentPage + 1)}
                        disabled={currentPage >= totalPages}
                        className='rounded-full border border-white/10 px-4 py-2 text-slate-200 transition hover:border-emerald-300 hover:text-emerald-100 disabled:cursor-not-allowed disabled:opacity-40'
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}

export default GalleryLayout;
