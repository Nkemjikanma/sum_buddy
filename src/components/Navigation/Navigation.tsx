import { MessageSquareDiff } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./Themetoggle";
import { UserButton } from "@clerk/nextjs";

const dummyNav = [
    {
        name: "Pricing",
        href: "#",
    },
    {
        name: "absolute",
        href: "#",
    },
    {
        name: "Documentation",
        href: "#",
    },
    {
        name: "Features",
        href: "#",
    },
];
export const Navigation = () => {
    return (
        <nav className="fixed top-0 mx-auto flex w-full max-w-[100rem] justify-between px-7 py-3 md:w-5/6 md:px-0">
            <aside className="flex items-center justify-center gap-1">
                <MessageSquareDiff color="#f97316" size={16} />
                <span className="text-lg">Sumbuddy.</span>
            </aside>

            {/* navigation */}
            <div className="relative my-auto hidden transform md:block">
                <ul className="flex items-center justify-center gap-8">
                    {dummyNav.map(({ name, href }) => (
                        <li
                            key={name}
                            className="transition-all hover:border-b hover:border-orange-500"
                        >
                            <Link href={href}>{name}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* loginLight and dark mode toggle */}
            <aside className="flex items-center gap-2">
                <Link href={"/agency"} className="">
                    Login
                </Link>
                <UserButton afterSignOutUrl="/" />

                {/* Dark mode feature */}
                {/* <ModeToggle /> */}
            </aside>
        </nav>
    );
};
