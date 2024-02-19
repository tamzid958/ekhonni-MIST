import Categories from "@/components/Categories";
import Corosol from "@/components/Corosol";
import TopBidding from "@/components/TopBidding";
import Search from "@/components/Search";
export default function Home() {
    return (
        <>
            <div className=" w-screen ">
                <Search/>
                <Corosol/>
                <Categories/>
                <TopBidding/>
            </div>
        </>
    );
}
