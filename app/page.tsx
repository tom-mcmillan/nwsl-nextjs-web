
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center text-center max-w-4xl">
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-8 font-medium">
          NWSL Data Project
        </div>
        
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-8 leading-tight">
          Free and open<br /><span className="text-blue-500">NWSL</span> data.
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center mb-16">
          <button className="rounded-full bg-black text-white hover:bg-gray-800 transition-colors font-medium text-sm px-6 py-3 flex items-center gap-2">
            Start now →
          </button>
          <a
            href="#"
            className="font-medium text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          >
            Documentation ›
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
          <button className="p-4 text-left rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors bg-white dark:bg-gray-900">
            <div className="font-medium text-sm">BigQuery →</div>
          </button>
          <button className="p-4 text-left rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors bg-white dark:bg-gray-900">
            <div className="font-medium text-sm">MPC Server →</div>
          </button>
          <button className="p-4 text-left rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors bg-white dark:bg-gray-900">
            <div className="font-medium text-sm">Chat →</div>
          </button>
        </div>
      </main>
    </div>
  );
}
