
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center text-center max-w-4xl">
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-8 font-medium">
          NWSL Data Project
        </div>
        
        <h1 className="text-[clamp(2rem,calc(2rem+2*((100vw-23.4375rem)/66.5625)),4rem)] leading-[clamp(2.28rem,calc(2.28rem+1.72*((100vw-23.4375rem)/66.5625)),4rem)] tracking-[-0.03em] font-medium mb-8">
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
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors bg-white dark:bg-gray-900 overflow-hidden">
            <Image
              src="/Screenshot 2025-07-13 at 4.00.38 PM.png"
              alt="Placeholder 1"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors bg-white dark:bg-gray-900 overflow-hidden">
            <Image
              src="/Screenshot 2025-07-13 at 4.00.46 PM.png"
              alt="Placeholder 2"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors bg-white dark:bg-gray-900 overflow-hidden">
            <Image
              src="/Screenshot 2025-07-13 at 4.00.54 PM.png"
              alt="Placeholder 3"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
