import Categories from "@/components/Categories";
import Corosol from "@/components/Corosol";
import TopBidding from "@/components/TopBidding";

export default function Home() {
    return (
        <>
            <div className=" w-screen ">
                <Corosol/>
                <Categories/>
                <TopBidding/>
            </div>
        </>
    );
}
