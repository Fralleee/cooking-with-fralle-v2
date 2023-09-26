import Header from "@/components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-full flex-col bg-sky-300">
            <Header />
            <main className="relative z-10 flex h-full flex-col items-center justify-between bg-stone-100">
                {children}
            </main>
        </div>
    );
}
