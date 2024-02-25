
import Categories from "@/components/Categories";
import Corosol from "@/components/Corosol";
import TopBidding from "@/components/TopBidding";
import Search from "@/components/Search";
import Header from "@/components/Header";
export default function Home() {
    return (
        <>
            <div className=" w-full ">
                <Header />
                <Search/>
                <Corosol/>
                <Categories/>
                <TopBidding/>
            </div>
        </>
    );
}
