import './App.css';
import GalleryLayout from './layouts/gallery/GalleryLayout';

function App() {
    return (
        <div className='min-h-screen bg-slate-950 text-slate-100'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(14,116,144,0.25),_transparent_45%)] pointer-events-none' />
            <div className='relative'>
                <header className='mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6'>
                    <div className='flex items-center gap-3'>
                        <div className='grid h-10 w-10 place-items-center rounded-2xl bg-emerald-400/20 text-emerald-200'>
                            UG
                        </div>
                        <div>
                            <p className='text-xs uppercase tracking-[0.35em] text-slate-400'>
                                Unsplash Gallery
                            </p>
                            <h1 className='text-lg font-semibold text-white'>
                                Rob Domrique
                            </h1>
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            const target = document.getElementById('collections');
                            target?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className='rounded-full border border-emerald-400/40 px-4 py-2 text-xs font-semibold text-emerald-200 transition hover:border-emerald-300 hover:text-emerald-100'
                    >
                        Collections
                    </button>
                </header>

                <main className='mx-auto w-full max-w-6xl px-6 pb-14'>
                    <section className='mb-10 grid gap-6 lg:grid-cols-[minmax(0,_2fr)_minmax(0,_1fr)]'>
                        <div className='rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_-60px_rgba(16,185,129,0.9)] backdrop-blur sm:p-8'>
                            <p className='text-xs uppercase tracking-[0.4em] text-emerald-300'>
                                Curated search
                            </p>
                            <h2 className='mt-3 text-3xl font-semibold text-white sm:text-4xl'>
                                Find the mood. Build the board.
                            </h2>
                            <p className='mt-3 max-w-xl text-sm text-slate-300 sm:text-base'>
                                Explore premium imagery with a clean,
                                fintech-inspired experience. Search by theme,
                                vibe, or subject and curate the visuals you
                                need.
                            </p>
                        </div>
                        <div className='rounded-3xl border border-white/10 bg-slate-900/70 p-6 text-sm text-slate-300'>
                            <p className='text-xs uppercase tracking-[0.3em] text-slate-400'>
                                Insight
                            </p>
                            <div className='mt-4 space-y-4'>
                                <div>
                                    <p className='text-lg font-semibold text-white'>
                                        24
                                    </p>
                                    <p className='text-xs text-slate-400'>
                                        Images per search
                                    </p>
                                </div>
                                <div className='h-px bg-white/10' />
                                <div>
                                    <p className='text-lg font-semibold text-white'>
                                        Unsplash
                                    </p>
                                    <p className='text-xs text-slate-400'>
                                        Trusted provider
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <GalleryLayout />
                </main>
            </div>
        </div>
    );
}

export default App;
