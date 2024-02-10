import { Navigation } from "@/components/Navigation/Navigation";
import Link from "next/link";

export default function HomepageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-white via-red-200/20 to-indigo-200/20 ">
            {/** TODO: Add a header */}
            <Navigation />
            {children}
            <div>
                <Link href="#">
                    <p className="text-muted-foreground text-xs">
                        <span className="text-sm text-orange-500">&copy; </span>
                        @nkemjika
                    </p>
                </Link>
            </div>
        </div>
    );
}
