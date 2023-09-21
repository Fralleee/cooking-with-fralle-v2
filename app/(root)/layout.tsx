import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-sky-300">
            <header className="relative grid min-h-0 w-full place-items-center bg-header py-4 text-center font-bold capitalize sm:min-h-[440px] lg:py-8">
                <div className="relative max-w-fit scale-0 animate-title rounded-full bg-stone-100">
                    <Image
                        src={"/logo.webp"}
                        alt={"Cooking with Fralle"}
                        width={320}
                        height={320}
                        priority
                        className="h-auto w-full"
                    />
                </div>
            </header>
            <main className="relative z-10 flex flex-col items-center justify-between bg-stone-100">
                {children}
            </main>
        </div>
    );
}
