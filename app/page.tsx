import Head from "next/head";
import { Header } from "./components/Header/Header";
import "./styles/styles.css";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>M.S Traders</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" w-auto ">
        <Header />
        <div className="bg-white">
          {/* <HomeHero /> */}
          <div className="min-h-screen pt-[120px] pb-[90px] lg:py-[180px]">
            <p className="text-5xl font-bebasBold text-black">Simple div</p>
          </div>
        </div>
      </main>
    </div>
  );
}
