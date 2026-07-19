import BrandHeader from "@/components/templates/index/BrandHeader";
import HeroSection from "@/components/templates/index/HeroSection";

import NavLink from "@/components/templates/index/NavLink";


export default function Home() {
  return (
    <div className="w-full flex flex-col gap-7 sm:gap-16 md:gap-18 mb-5">
      <HeroSection />
      <BrandHeader />
      <NavLink />
    </div>
  );
}
