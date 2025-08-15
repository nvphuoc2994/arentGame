import { Outlet } from "react-router-dom";
import ScrollTop from "@/components/ScrollTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MainLayout() {
    return <>
        <Header />
        <Outlet />
        <ScrollTop />
        <Footer />
    </>;
}