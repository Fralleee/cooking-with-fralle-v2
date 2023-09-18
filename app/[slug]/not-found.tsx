import Link from "next/link"
import { buttonVariants } from "@/components/ui/button";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: "Not found",
  }
}

export default function NotFound() {
  return (
    <>
      <main className="w-full text-center py-14 lg:py-24 bg-header h-full">
        <h1
          className="text-6xl md:text-7xl lg:text-9xl animate-title bg-gradient-to-r from-cozy-start to-cozy-end bg-300 bg-clip-text opacity-0 ease-in-out"
          style={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            WebkitTextStrokeWidth: '2px',
            WebkitTextStrokeColor: 'rgba(0, 0, 0, 0.3)',
          }}
        >
          Not found
        </h1>
        <div className="bg-white mt-12 max-w-max mx-auto p-12 rounded-3xl flex flex-col gap-6">
          <p>Could not find requested resource</p>
          <Link href="/" className={buttonVariants({ variant: "outline" })}>
            Browse recipes
          </Link>
        </div>
      </main>
    </>
  )
}