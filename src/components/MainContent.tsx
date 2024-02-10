"use client";

import { useModal } from "@/lib/utils/ModalProvider";
import Art from "../../public/icons/art";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export const MainContent = () => {
    const { openModal, setOpenModal } = useModal();

    const handleFileOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();

        setOpenModal(true);
    };

    const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault;
    };

    return (
        <>
            <section
                onDragOver={() => setOpenModal(true)}
                onDrop={handleFileDrop}
                onDragEnd={() => setOpenModal(false)}
                className="container relative flex w-full flex-col items-center justify-between gap-5 px-2 py-5 md:flex-row"
            >
                {/** Banner */}
                <div className="relative order-1 flex flex-col gap-6 border-orange-500">
                    <h1 className="relative max-w-[570px] whitespace-pre-line text-center text-5xl font-light md:text-left lg:w-[530px]">
                        The ai summary assistant for everyone
                        <span className="text-orange-500">.</span>
                    </h1>

                    <p className="text-muted-foreground text-sm">
                        Drag and drop video or audio files to begin generating
                        detailed, concise and useful summary of the
                        converstaion.
                    </p>

                    <div className="relative mt-4 flex w-full justify-center gap-4 lg:justify-start">
                        <div className="relative flex w-full border sm:w-[60%]">
                            <Input
                                placeholder="Paste a link"
                                className="focus-visible:none rounded-sm"
                            />
                            <Button
                                variant="ghost"
                                className="text-muted-foreground hover:bg-orange-100280 text-sm font-light"
                                disabled={true}
                            >
                                Summarize
                            </Button>
                        </div>
                    </div>
                    <Separator className="bg-orange-500" />
                </div>

                <div className="relative order-2 w-[300px] max-w-[350px] place-items-center justify-center">
                    <div className="relative flex flex-col place-items-center gap-4 text-center">
                        <div className="">
                            <Art width="100" height="100" />
                        </div>
                        <div>
                            <h4 className="font-semiboldd text-sm">
                                How it works
                            </h4>
                            <p className="text-muted-foreground relative mt-1 text-xs">
                                Paste a link or drop a file anywhere on the
                                page.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Dialog open={openModal} onOpenChange={setOpenModal}>
                <DialogContent>Modal Open</DialogContent>
            </Dialog>
        </>
    );
};
