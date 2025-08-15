import Dish from "@/components/Dish";
import TopChart from "@/components/TopChart";
import AchievementRate from "@/components/AchievementRate";
export default function TopPage() {
    return <div>
        <section className="flex md:h-[312px] max-md:flex-col">
            <div className="basis-[42%]">
                <AchievementRate />
            </div>
            <div className="basis-[58%] bg-dark-600 px-[5%] py-3">
                <TopChart />
            </div>
        </section>
        <Dish />
    </div>;
}