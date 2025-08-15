import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="container text-primary-300">
            <Header />
            <span className="">123</span>
            <Outlet />
        </div>
    )
}