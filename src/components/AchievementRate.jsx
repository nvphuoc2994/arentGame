import useGetAchievement from "@/hooks/useGetAchievement";
import { useEffect, useRef, useState } from "react";

export default function AchievementRate() {
    const svgRef = useRef(null);
    const [rate, setRate] = useState(0);
    const { data, isLoading } = useGetAchievement();
    const [progress, setProgress] = useState(data?.data?.progress);

    useEffect(() => {
        if (!isLoading) {
            setRate(data.data?.progress);
        }
    }, [isLoading])

    useEffect(() => {
        if (svgRef.current) {
            const d = svgRef.current.clientWidth;
            setProgress(d * 3.14 * rate);
        }
    }, [rate])

    return (
        <div
            className="relative p-2 md:flex-1 h-full w-full flex items-center justify-center bg-[url(/images/main_photo.jpg)] md:aspect-3/7 bg-cover bg-center"
        >
            <div
                className="flex items-center justify-center aspect-square w-[180px] text-white relative"
            >
                <svg
                    ref={svgRef}
                    className="w-full h-full absolute top-0 left-0 -rotate-90 drop-shadow-[0_0_2px_rgba(252,165,0,1)]"
                >
                    <circle
                        cx="50%"
                        cy="50%"
                        r="48%"
                        className="fill-none stroke-white stroke-2 progress-circle"
                        style={{
                            strokeDasharray: `${progress} 2000`,
                        }}
                    />
                </svg>
                <p className="text-[25px]">
                    <small className="text-lg">05/21</small> {rate * 100}%
                </p>
            </div>
        </div>
    )
}