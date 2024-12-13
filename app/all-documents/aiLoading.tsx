"use client"

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Portal from "@portals/index";
import { TailSpin } from "react-loader-spinner";

const labelsList = [
    "Uploading file to the cloud...",
    "Encrypting file...",
    "Compressing file...",
    "Generating shareable link...",
    "Loading..."
];

export default function Loading()
{
    const interValRef = useRef<NodeJS.Timeout | null>(null);
    const [ currLabelIdx, setCurrLabelIdx ] = useState(0);

    useEffect(() => {
        interValRef.current = setInterval(() => {
            setCurrLabelIdx(pre => {
                if (pre === labelsList.length - 1) return pre;
                return pre + 1;
            });
        }, 1 * 1000);

        return () => {
            if (!!interValRef.current) {
                clearInterval(interValRef.current);
            };
        };
    }, []);

    return (
        <Portal className="backdrop-blur">
            <div className="flex flex-col items-center justify-center w-full gap-8 px-16">
                <p className="text-xl font-medium text-center text-white">
                    {labelsList[currLabelIdx]}
                </p>

                <div className="relative flex items-center justify-center">
                    <Image
                        src="/bot.svg"
                        width={100}
                        height={100}
                        alt="bot"
                        className="object-contain p-3 bg-orange-200 rounded-full"
                    />

                    <TailSpin
                        height="105"
                        width="105"
                        color="#ea580c"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        strokeWidth={1}
                        wrapperClass="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-auto"
                    />
                </div>
            </div>
        </Portal>
    );
};