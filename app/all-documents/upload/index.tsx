"use client"

import { useUpload } from "@upload/useUpload";

import Portal from "@portals/index";
import ErrorText from "@errorText/index";
import Loading from "@allDocuments/aiLoading";
import { Button, cn } from "@nextui-org/react";
import { FormProvider } from "react-hook-form";
import UploadDevice from "@upload/uploadDevice";
import SuccessModal from "./success";

export default function Upload(props: {
    toggleModal: () => void;
})
{
    const {
        url,
        reset,
        methods,
        handleSave,
        isLoading,
        uploadError
    } = useUpload();

    if (isLoading) {
        return <Loading />
    };

    if (!!url?.length) {
        return <SuccessModal url={url} reset={reset} />
    };

    return (
        <Portal>
            <FormProvider {...methods}>
                <form
                    onSubmit={methods.handleSubmit(handleSave)}
                    className="flex flex-col items-center justify-between w-3/4 max-w-2xl px-6 py-6 bg-white shadow-2xl rounded-2xl"
                >
                    <p className="text-2xl font-semibold text-primary">
                        Upload File
                    </p>

                    <div className="flex relative items-center justify-center w-fit mt-6 mb-6 h-11 px-2 py-0.5 gap-1.5 rounded-full border-1 border-neutral-100 bg-neutral-200/60">
                        <p className="flex justify-center text-xs bg-black h-full font-medium select-none items-center px-5 rounded-full cursor-pointer text-white">
                            From Device
                        </p>
                    </div>

                    <UploadDevice />

                    {!!uploadError &&
                        <ErrorText
                            className="mt-2 mb-7"
                            message={uploadError}
                        />
                    }

                    <div className="flex items-center justify-center w-full gap-6">
                        <Button
                            radius="sm"
                            color="primary"
                            type="submit"
                            onPress={props.toggleModal}
                            variant="bordered"
                            className="px-10 py-[1.35rem] font-semibold tracking-wider"
                        >
                            Cancel
                        </Button>

                        <Button
                            radius="sm"
                            type="submit"
                            variant="shadow"
                            className="px-12 py-6 font-semibold tracking-wider text-white bg-primary"
                        >
                            Upload
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </Portal>
    );
};