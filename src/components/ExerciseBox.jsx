
export default function ExerciseBox({ title, calories, duration }) {
    return (
        <div className="flex justify-between list-inside border-b-dark-400 border-b">
            <div>
                <div className="inline-flex flex-col text-[15px] leading-5">
                    <h3 className="leading-none font-hkgp font-light">{title}</h3>
                    <p className="text-primary-300">{calories}</p>
                </div>
            </div>
            <div className="text-primary-300 text-lg">{duration}</div>
        </div>
    );
}
