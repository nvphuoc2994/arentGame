import { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { subNavs } from '../constants';
import useOutsideClick from '@/hooks/useOutsideClick';

export default function Menus() {
    const [open, setOpen] = useState(false);
    const ref = useRef()
    useOutsideClick(ref, () => setOpen(false));
    return (
        <div className='relative' ref={ref}>
            <li className="text-primary-400 cursor-pointer" onClick={() => setOpen(!open)}>
                {open ? <img src="/icons/close.svg" alt="Close" /> : <img src="/icons/bar.svg" alt="Bar" />}
            </li>
            {open && <div className="absolute top-full right-0 bg-white w-[280px] z-20">
                <ul className='divide-y divide-[#656565]'>
                    {subNavs.map(({ to, title }) => (
                        <li key={to} className='border-t border-[#8B8B8B] border-b border-b-[#656565]'>
                            <NavLink className="bg-dark-400 px-8 py-[22px] block text-[18px] text-white font-hkgp" to={to}>{title}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>}
        </div>
    );
}