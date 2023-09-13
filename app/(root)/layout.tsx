import { cn } from '@/lib/utils';
import { Oleo_Script } from 'next/font/google';

const font = Oleo_Script({ subsets: ['latin'], weight: '700' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header
        className={cn(
          'relative capitalize font-bold w-full text-center py-14 lg:py-24 bg-header',
          font.className
        )}
      >
        <h1
          className="text-6xl md:text-7xl lg:text-9xl animate-title bg-gradient-to-r from-cozy-start to-cozy-end bg-300 bg-clip-text opacity-0 ease-in-out"
          style={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            WebkitTextStrokeWidth: '2px',
            WebkitTextStrokeColor: 'rgba(0, 0, 0, 0.3)',
          }}
        >
          COOKING
        </h1>
        <h2
          className="text-4xl md:text-5xl lg:text-6xl animate-title bg-gradient-to-r from-cozy-start to-cozy-end bg-300 bg-clip-text opacity-0 ease-in-out"
          style={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            WebkitTextStrokeWidth: '2px',
            WebkitTextStrokeColor: 'rgba(0, 0, 0, 0.3)',
          }}
        >
          WITH FRALLE
        </h2>
      </header>
      <main className="flex flex-col items-center justify-between p-7">
        {children}
      </main>
    </>
  );
}
