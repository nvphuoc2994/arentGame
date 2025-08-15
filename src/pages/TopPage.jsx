import Dish from "@/components/Dish";
import ImageLeft from "/images/banner.jpg";
import TopChart from "@/components/TopChart";
export default function TopPage() {
    return <div>
        <section className="flex md:h-[312px] max-md:flex-col">
            <div className="basis-[42%]">
                <img src={ImageLeft} alt="Image Left" className="h-full w-full object-cover" />
            </div>
            <div className="basis-[58%] bg-dark-600 px-[5%] py-3">
                <TopChart />
            </div>
        </section>
        <Dish />
    </div>;
}