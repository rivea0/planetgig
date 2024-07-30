import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <section className="flex flex-col justify-center items-center gap-8">
      <h1 className="text-gray-800 text-5xl text-center font-semibold mt-24">Find your next opportunity</h1>
      <Button className="button w-min text-lg" asChild size="lg">
        <Link href="#gigs">Explore gigs</Link>
      </Button>
      </section>
      <section id="gigs" className="w-full flex flex-col gap-8 md:gap-12">
        <h2>Gig opportunities</h2>
        {/* <div className="flex w-full flex-col gap-5 md:flex-row"></div> */}
        {/* <Gigs /> */}
      </section>
    </main>

    // <div className={`${urbanist.className} flex flex-col justify-center items-center gap-8`} >
    //   <h1 className="text-gray-800 text-5xl text-center font-semibold mt-24">Find your next opportunity</h1>
    //   <Button className="button w-min text-lg" asChild size="lg">
    //     <Link href="#gigs">Explore gigs</Link>
    //   </Button>
    // </div>
  );
}
