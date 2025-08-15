export default function DiaryBox({ date, time, title, description }) {
    return (
        <div className="p-4 space-y-2 border-[2px] border-[#707070]">
            <p className="text-lg font-inter">
                {date} <br /> {time}
            </p>
            <div className="pb-3 font-hkgp font-light text-xs">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}