import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}) {
    return {
        title: "Not found",
    };
}

export default function NotFound() {
    return (
        <>
            <main className="h-full w-full py-14 text-center lg:py-24">
                <h1
                    className="bg-300 animate-title bg-gradient-to-r from-cozy-start to-cozy-end bg-clip-text text-6xl opacity-0 ease-in-out md:text-7xl lg:text-9xl"
                    style={{
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        WebkitTextStrokeWidth: "2px",
                        WebkitTextStrokeColor: "rgba(0, 0, 0, 0.3)",
                    }}
                >
                    Not found
                </h1>
                <div className="mx-auto mt-12 flex max-w-max flex-col gap-6 rounded-3xl bg-stone-100 p-12">
                    <p>Could not find requested resource</p>
                    <Link
                        href="/"
                        className={buttonVariants({ variant: "outline" })}
                    >
                        Browse recipes
                    </Link>
                </div>
            </main>
        </>
    );
}
