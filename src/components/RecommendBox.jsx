
export function RecommendBox({ title, description }) {
    return (
        <div className="flex flex-col items-center justify-center gap-2 bg-dark-600 px-2 py-6">
            <h2 className="text-primary-300 uppercase text-[22px] text-center font-base">
                {title}
            </h2>
            <div className="w-14 h-0.5 bg-white" />
            <p className="text-white font-hkgp text-center text-lg font-light">{description}</p>
        </div>
    );
}
