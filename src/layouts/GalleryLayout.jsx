import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { categories } from '../data/categories';
import { collections } from '../data/collections';
import SearchBar from './gallery/SearchBar';
import CategoryChips from './gallery/CategoryChips';
import ResultsMeta from './gallery/ResultsMeta';
import GalleryContent from './gallery/GalleryContent';
import CollectionsGrid from './gallery/CollectionsGrid';
import Pagination from './gallery/Pagination';

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

    const pageNumbers = (() => {
        const maxButtons = 5;
        let start = Math.max(1, currentPage - Math.floor(maxButtons / 2));
        let end = Math.min(totalPages, start + maxButtons - 1);
        start = Math.max(1, end - maxButtons + 1);
        return Array.from({ length: end - start + 1 }, (_, idx) => start + idx);
    })();

    const handleSearch = async (page = 1, searchQuery = query) => {
        if (!searchQuery) return;

        try {
            setIsLoading(true);
            setErrorMessage('');
            const { data } = await axios.get(API_URL, {
                headers: {
                    Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_API_KEY}`,
                },
                params: {
                    query: searchQuery,
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

    useEffect(() => {
        handleSearch(1);
    }, []);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div className='pb-10'>
            <div className='rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_20px_70px_-40px_rgba(45,212,191,0.9)] backdrop-blur sm:p-6'>
                <SearchBar
                    query={query}
                    setQuery={setQuery}
                    onSearch={handleSearch}
                    inputRef={inputRef}
                />
                <CategoryChips
                    categories={categories}
                    activeQuery={query}
                    onSelect={(category) => {
                        setQuery(category);
                        handleSearch(1, category);
                    }}
                />
                <ResultsMeta
                    imagesLength={images.length}
                    currentPage={currentPage}
                    totalPages={totalPages}
                />
            </div>

            <div className='mt-8'>
                <GalleryContent
                    isLoading={isLoading}
                    errorMessage={errorMessage}
                    images={images}
                />
            </div>

            <CollectionsGrid
                collections={collections}
                onSelect={(collectionQuery) => {
                    setQuery(collectionQuery);
                    handleSearch(1, collectionQuery);
                }}
            />

            {!!images.length && !isLoading && !errorMessage && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    pageNumbers={pageNumbers}
                    onPage={(page) => handleSearch(page)}
                />
            )}
        </div>
    );
}

export default GalleryLayout;
