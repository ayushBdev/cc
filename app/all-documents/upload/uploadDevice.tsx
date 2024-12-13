"use client"

import type { TUseUpload } from "@types";

import { useCallback } from "react";
import { useFormContext } from "react-hook-form";
import { useDropzone } from "@uploadthing/react";
import { generateClientDropzoneAccept } from "uploadthing/client";

import dayjs from "dayjs";
import Image from "next/image";
import { bytesToKb } from "@utlis";
import ErrorText from "@errorText/index";
import { FaFileArrowUp } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { RiUploadCloud2Line } from "react-icons/ri";

export default function UploadDevice()
{
    const { setValue, watch, formState: { errors } } = useFormContext();
    const file = watch("file") as File[];

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setValue("file", acceptedFiles)
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        multiple: false,
    });

    return (
        <>
            <div
                {...getRootProps()}
                className="flex flex-col items-center justify-center w-3/4 px-4 mb-4 border-dashed cursor-pointer group hover:bg-neutral-50/75 hover:border-primary hover:border-solid rounded-xl py-7 border-1 border-neutral-400"
            >
                <input
                    {...getInputProps()}
                />

                <RiUploadCloud2Line className="w-8 h-8 text-neutral-600 group-hover:text-black" />

                <p className="flex items-center justify-center text-center gap-1 mt-3 mb-0.5 text-sm font-semibold text-primary">
                    Click to upload

                    <span className="font-normal text-black">
                        or drag and drop here
                    </span>
                </p>

                <p className="font-normal text-xSm text-neutral-700">
                    Supported images and pdf. (Max allowed size: 8MB)
                </p>
            </div>

            {!!errors["file"] &&
                <ErrorText
                    className="mt-2 mb-7"
                    message={errors["file"].message as string}
                />
            }

            {!!file[0] &&
                <div className="relative flex items-center justify-start w-full gap-3 p-4 mb-8 rounded-lg bg-zinc-100">
                    <FaFileArrowUp className="size-6 text-primary"/>

                    <p className="flex flex-col items-start justify-center gap-0.5 text-sm font-semibold text-black truncate">
                        {file[0].name}

                        <span className="text-xs font-medium text-neutral-500">
                            {bytesToKb(file[0].size)}Kb • {dayjs(file[0].lastModified).format("ddd DD-MM-YYYY hh:mm A")}
                        </span>
                    </p>

                    <RxCross2
                        onClick={() => setValue("file", [])}
                        className="w-5 h-5 p-0.5 text-white bg-black rounded-full cursor-pointer hover:scale-110 transition-all absolute right-3 top-3"
                    />
                </div>
            }
        </>
    );
};