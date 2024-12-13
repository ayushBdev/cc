import { HiOutlineRocketLaunch } from "react-icons/hi2";

export default function Plan()
{
    return (
        <div className="flex flex-col items-start justify-between p-5 w-full rounded-xl aspect-square bg-gradient-to-r from-[#FC5C7D] to-[#6A82FB]">
            <HiOutlineRocketLaunch className="w-10 h-10 text-neutral-200" />

            <p className="text-2xl font-bold text-white">
                Pro Plan
            </p>

            <p className="text-sm font-medium text-neutral-100">
                Upgrade to our Pro Plan for advanced and exclusive features.
            </p>

            <div className="flex items-center justify-between w-full">
                <p className="flex items-center justify-center gap-1 text-base font-semibold text-white">
                    $10/ mo
                </p>
            </div>
        </div>
    );
};