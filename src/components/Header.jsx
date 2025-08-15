import { NavLink } from "react-router-dom";
import Logo from '/images/logo.svg';
import Menus from "./Menus";
import { navs } from "../constants";
import clsx from "clsx";

export default function Header() {
    return <div className="bg-tertiary">
        <div className="container">
            <div className="py-4 flex items-center justify-between">
                <NavLink to="/">
                    <h1>
                        <img src={Logo} className="text-primary-400" alt="Logo" />
                    </h1>
                </NavLink>
                <ul className="flex lg:gap-20 gap-4">
                    {navs.map((({ to, title, icon, count }, index) => (
                        <li key={index}>
                            <NavLink to={to} className={({ isActive }) => clsx('flex items-center gap-2 font-hkgp', isActive ? 'text-primary-400' : 'text-white')}>
                                <div className="relative">
                                    <img src={icon} className="text-primary-400 " alt="Icon" />
                                    {count && <span className="absolute top-0 -right-2 w-4 h-4 bg-primary-500 rounded-full flex items-center justify-center text-[10px] text-white">{count}</span>}
                                </div>
                                <span className="max-md:hidden">{title}</span>
                            </NavLink>
                        </li>
                    )))}
                    <Menus />
                </ul>
            </div>
        </div>
    </div>;
}