import Corosol from "@/components/Corosol";
import Card from "@/components/Card";

export default function Home() {
  return (
    <>
        <div className=" w-screen flex justify-center">
            <Card picture="/dslr.jpg" name="DSLR Camera" categories="Electronics" price="120"/>
        </div>
    </>
  );
}
