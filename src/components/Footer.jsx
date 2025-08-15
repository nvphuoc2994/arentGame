import { NavLink } from 'react-router-dom';
import { navFoots } from '../constants';

export default function Footer() {
    return <div className="bg-tertiary">
        <div className="container">
            <ul className='py-14 max-md:py-6 flex flex-wrap gap-12 max-md:gap-6 text-[11px] text-white font-hkgp'>
                {navFoots.map(({ to, title }) => (
                    <li key={title}>
                        <NavLink to={to}>{title}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    </div>;
}