
export const Plans_Skeleton = () => {
    return (
        <div className="w-full rounded-[13px] cursor-pointer relative px-[30px] py-[40px] animate-pulse">
            <div className="plan_title flex flex-col gap-[4px] mb-[25px]">
                <div className="h-4 bg-gray-200 w-24 my-1"></div>
                <div className="h-4 bg-gray-200 w-32"></div>
            </div>
            <div className="plan_benefits flex flex-col gap-[10px]">
                <div className="flex gap-[8px]">
                    <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                    <div className="h-4 bg-gray-200 w-full"></div>
                </div>
                <div className="flex gap-[8px]">
                    <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                    <div className="h-4 bg-gray-200 w-full"></div>
                </div>
                <div className="flex gap-[8px]">
                    <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                    <div className="h-4 bg-gray-200 w-full"></div>
                </div>
                <div className="flex gap-[8px]">
                    <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                    <div className="h-4 bg-gray-200 w-full"></div>
                </div>
                <div className="flex gap-[8px]">
                    <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                    <div className="h-4 bg-gray-200 w-full"></div>
                </div>
                {/* <!-- More items... --> */}
            </div>
            <button className="w-[90%] mx-auto mt-[20px] p-[15px] font-bold border-none outline-none rounded-[12px] bg-gray-200"></button>
        </div>
    )
}
