import Plan from "@navbar/Plan";

export default function Navbar()
{
    return (
        <div className="flex flex-col items-center justify-between w-56 h-full">
            <div className="flex flex-col items-start justify-center w-full gap-5">
                <p className="text-xl font-medium">
                    <span className="text-red-500">
                        C
                    </span>
                    <span className="text-white">
                        loudi
                    </span>
                    <span className="text-red-500">
                        fy
                    </span>
                </p>
            </div>

            <Plan />
        </div>
    );
};