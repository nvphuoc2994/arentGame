import { useEffect, useRef } from "react";

export default function ScrollTop() {
    const buttonRef = useRef(null);

    const onClick = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                buttonRef.current.classList.remove('invisible');
            } else {
                buttonRef.current.classList.add('invisible');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <button ref={buttonRef} onClick={onClick} className="bg-white cursor-pointer fixed bottom-10 right-10 border border-dark-400 bg-light rounded-full flex items-center justify-center w-12 h-12 invisible">
        <img src="/icons/arrow-up.svg" className="w-4 h-[10px]" alt="scrollTop" />
    </button>;
}