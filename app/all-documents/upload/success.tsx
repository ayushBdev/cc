import Portal from "@portals/index";
import { Button } from "@nextui-org/react";

export default function SuccessModal(props: {
    url: string;
    reset: () => void;
})
{
    return (
        <Portal className="backdrop-blur-xs">
            <div className="w-11/12 lg:max-w-11/12 rounded-2xl shadow md:w-[42rem] relative flex text-center flex-col justify-center items-center px-4 py-6 md:p-10 rounded-2.5xl bg-white border-1 border-neutral-200">
                <img src="/tick.png" alt="success" className="size-32" />

                <p className="px-4 mt-4 text-lg font-medium lg:px-0 md:text-xl md:mt-7 text-primary">
                    File Uploaded Successfully
                </p>

                <p className="mt-2.5 text-base font-medium md:px-10 mb-5 text-orange-600 italic">
                    {props.url}
                </p>

                <Button
                    radius="sm"
                    type="button"
                    variant="shadow"
                    onPress={props.reset}
                    className="px-12 py-6 font-semibold tracking-wider text-white bg-primary"
                >
                    Upload another file
                </Button>
            </div>
        </Portal>
    );
};