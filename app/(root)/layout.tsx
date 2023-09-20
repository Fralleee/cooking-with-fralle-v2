import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-sky-300">
      <header className="relative capitalize font-bold w-full text-center py-4 min-h-0 sm:min-h-[440px] lg:py-8 bg-header grid place-items-center">
        <div className="relative max-w-fit bg-stone-100 rounded-full animate-title">
          <Image src={"/logo.webp"} alt={"Cooking with Fralle"} width={320} height={320} priority className="w-full h-auto" />
        </div>
      </header>
      <main className="relative z-10 flex flex-col items-center justify-between bg-stone-100">
        {children}
      </main>
    </div>
  );
}
