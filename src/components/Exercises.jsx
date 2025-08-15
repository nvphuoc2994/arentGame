import useGetExercises from "@/hooks/useGetExercises";
import ExerciseBox from "./ExerciseBox";
import { RECORDS_ID } from "@/constants";

export function Exercises() {
    const { data } = useGetExercises();

    return (
        <section id={RECORDS_ID.exercise} className="px-6 py-4 bg-[#414141] text-white">
            <h3 className="flex gap-5 mb-1">
                <span className="w-24 h-9 leading-5 uppercase">MY EXERCISE</span>
                <span className="text-[22px]">2021.05.21</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 pr-6 h-48 overflow-auto custom-scrollbar">
                {data?.data.map((exercise, index) => (
                    <ExerciseBox key={index} {...exercise} />
                ))}
            </div>
        </section>
    );
}
