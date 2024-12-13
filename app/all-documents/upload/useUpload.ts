import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUploadThing } from "@hooks/useUploadThing";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const useUpload = () =>
{
    const [ url, setUrl ] = useState<string|null>(null);
    const [ uploadError, setUploadError ] = useState<string | null>(null);

    const methods = useForm({
        mode: "onSubmit",
        reValidateMode: "onChange",
        resolver: zodResolver(z.object({
            file: z.array(z.any()).nonempty({ message: "Select a valid file" })
        })),
        defaultValues: {
            file: [],
            url: "",
            webpage: "",
        },
    });

    const { startUpload, isUploading } = useUploadThing("imageUploader", {
        onClientUploadComplete: (data: any) => {
            console.debug("uploaded successfully!", data);
            setUrl(data[0].url);
        },
        onUploadError: (error: any) => {
            console.debug("error occurred while uploading", error);
            setUploadError(error.message);
        },
    });

    const handleSave = async (data: { url: string, webpage: string, file: File[] }) => {
        console.debug("handleSave data", data);
        startUpload(data.file);
    };

    return {
        url,
        methods,
        handleSave,
        uploadError,
        reset: () => setUrl(null),
        isLoading: isUploading,
    };
};