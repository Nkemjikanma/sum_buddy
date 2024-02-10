import { MainContent } from "@/components/MainContent";

export default function Home() {
    return (
        <main className="min-h-5/6 relative flex w-5/6 max-w-[100rem] items-center justify-center">
            {/* Background lines */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
            <MainContent />
        </main>
    );
}
