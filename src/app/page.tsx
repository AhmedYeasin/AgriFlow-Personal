import Footer from "@/app/components/Footer";
import Hero from "@/app/Home/Hero";
import State from "@/app/Home/State";
import Features from "@/app/Home/Features";
import CTA from "@/app/Home/CTA";
import Navbar from "@/app/components/Navber";

export default function Home() {
  return (
    <div className="bg-gray-50 font-sans dark:bg-gray-600">
      <Navbar></Navbar>
      <main className="">
        <Hero></Hero>
        <State></State>
        <Features></Features>
        <CTA></CTA>
      </main>
      <Footer></Footer>
    </div>
  );
}