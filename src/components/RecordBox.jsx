export function RecordBox({ title, desc, imgSrc, id }) {
    function moveTo(id) {
        const el = document.getElementById(id);
        el?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    }

    return (
        <div
            role="button"
            className="border-[24px] border-primary-300 aspect-square flex flex-col gap-2 items-center justify-center relative bg-dark-custom"
            onClick={() => moveTo(id)}
        >
            <img
                src={imgSrc}
                alt={title}
                className="absolute top-0 left-0 object-cover -z-10 grayscale aspect-square"
            />
            <h2 className="text-primary-300 uppercase text-[25px] text-center relative z-10">
                {title}
            </h2>
            <p className="text-white font-hkgp w-40 text-center text-sm bg-primary-400 relative z-10 p-0.5">
                {desc}
            </p>
        </div>
    );
}
