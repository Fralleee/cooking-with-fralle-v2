import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-sky-200">
      <header className="relative capitalize font-bold w-full text-center py-4 lg:py-8 bg-header">
        <div className="relative max-w-fit mx-auto bg-white rounded-full">
          <Image src={"/logo.webp"} alt={"Cooking with Fralle"} width={512} height={512} />
        </div>
      </header>
      <main className="flex flex-col items-center justify-between bg-white">
        {children}
      </main>
    </div>
  );
}
