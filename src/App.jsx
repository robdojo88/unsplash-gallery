import './App.css';
import GalleryLayout from './layouts/GalleryLayout';
import AppBackground from './app/AppBackground';
import AppHeader from './app/AppHeader';
import HeroSection from './app/HeroSection';
import InsightPanel from './app/InsightPanel';

function App() {
    const handleScrollToCollections = () => {
        const target = document.getElementById('collections');
        target?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='min-h-screen bg-slate-950 text-slate-100'>
            <AppBackground />
            <div className='relative'>
                <AppHeader onScrollToCollections={handleScrollToCollections} />

                <main className='mx-auto w-full max-w-6xl px-6 pb-14'>
                    <section className='mb-10 grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]'>
                        <HeroSection />
                        <InsightPanel />
                    </section>

                    <GalleryLayout />
                </main>
            </div>
        </div>
    );
}

export default App;
