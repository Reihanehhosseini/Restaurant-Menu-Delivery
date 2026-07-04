// components/menu/CategoryItem.tsx


export default function CategoryItem({category, isActive, onClick }) {
  const Icon = category.icon;

  return (
    <button
      onClick={onClick}
      className={`relative flex w-full flex-col items-center justify-center rounded-l-2xl py-3 pl-1  transition-all duration-200 ${
        isActive ? "text-amber-400" : "text-white/50 hover:text-white/80"
      }`}
    >
      {isActive && (
        <span className="absolute inset-y-1 left-1 w-0.5 rounded-full bg-amber-400" />
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