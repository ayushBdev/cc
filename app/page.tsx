"use client";

import { Button } from "@nextui-org/react";
import Upload from "@upload/index";
import { useToggle } from "rooks";

export default function Page()
{
    const [ showModal, setShowModal ] = useToggle(false);

    return (
        <>
            <div className="flex items-center justify-between w-full px-5 bg-white shadow-md h-14 border-b-1 border-neutral-300 shadow-black/15">
                <p className="text-base font-bold self-center">
                    Upload and Share File
                </p>

                <Button
                    radius="sm"
                    variant="shadow"
                    onPress={setShowModal}
                    className="px-4 py-4 font-semibold tracking-wider text-white bg-primary"
                >
                    Upload File
                </Button>
            </div>

            <div className="flex items-center justify-center w-full flex-1">
                <Button
                    radius="sm"
                    variant="shadow"
                    onPress={setShowModal}
                    className="px-4 py-4 font-semibold tracking-wider text-white w-fit bg-primary"
                >
                    Click here to Upload and share File
                </Button>

                {showModal && <Upload toggleModal={setShowModal} />}
            </div>
        </>
    );
};