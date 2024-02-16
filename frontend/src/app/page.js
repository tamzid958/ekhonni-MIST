import Card from "@/components/Card";
import Corosol from "@/components/Corosol";
import Image from "next/image";

export default function Home() {

  return (
    <>
        <div className=" w-screen flex justify-center">
            <Card picture="/dslr.jpg" name="DSLR Camera" categories="Electronics" price="120"/>

        </div>
    </>
  );
}
