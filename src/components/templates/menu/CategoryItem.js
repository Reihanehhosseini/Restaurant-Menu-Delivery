import { Martini } from "lucide-react";
import { PiCoffeeBold } from "react-icons/pi";
import { SiCoffeescript } from "react-icons/si";
import { GiCupcake } from "react-icons/gi";
import { PiHamburger } from "react-icons/pi";
import { GiFullPizza } from "react-icons/gi";

export default function CategoryItem({ category, isActive, onClick }) {
  const icons = {
    tea: PiCoffeeBold,
    espresso: SiCoffeescript,
    cold: Martini,
    pastries: GiCupcake,
    burger: PiHamburger,
    pizza: GiFullPizza,
  };

    const Icon = icons[category.icon];

  return (
    <button
      onClick={onClick}
      className={`relative flex w-full flex-col gap-3 items-center justify-center rounded-r-2xl py-3  transition-all duration-200 ${
        isActive ? "text-gold bg-[#171411] border border-[#8E6A32]" : "text-white/50 hover:text-white/80"
      }`}
    >
      {isActive && (
        <span className="absolute inset-y-1 -left-px w-0.5 rounded-full bg-amber-400 shadow-[inset_0_0_0_1px_rgba(200,168,107,0.15),0_8px_24px_rgba(0,0,0,0.35)]" />
      )}
      <Icon
        className={`size-7 sm:size-8 transition-transform duration-200 ${isActive ? "scale-110" : ""}`}
        strokeWidth={isActive ? 2 : 1.5}
        fill={isActive ? "#D4AF37" : "white"}
      />
      <span
        className={`text-[9px] font-semibold uppercase tracking-widest ${
          isActive ? "text-amber-400" : "text-white"
        }`}
      >
        {category.label}
      </span>
    </button>
  );
}
