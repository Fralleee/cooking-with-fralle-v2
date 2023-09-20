import { cn } from '@/lib/utils';
import './globals.css'
import type { Metadata } from 'next'
import { Roboto, Oleo_Script } from 'next/font/google'
import ClientLayout from './client-layout';

const font = Roboto({ subsets: ['latin'], weight: ["400", "700"] })
const titleFont = Oleo_Script({ subsets: ['latin'], weight: '700', variable: "--font-header" });

export const metadata: Metadata = {
  title: 'Cooking with Fralle',
  description: 'Your one stop shop for delicious recipes',
}

export default function Layout(props: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={cn("flex flex-col", titleFont.variable, font.className)}>
        <ClientLayout {...props} />
      </body>
    </html>
  )
}
