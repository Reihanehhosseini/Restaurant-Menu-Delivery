"use client";

const ExperienceCard = ({ title, description, active, onClick ,icon }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full sm:h-30 sm:gap-3 sm:flex-col sm:justify-center sm:items-center flex gap-3 rounded-2xl border p-3  transition ${active ? "border-border bg-[#201A10]" : "rounded-[10px] border border-bordertest/30 bg-inherit shadow-[0_0_0_1px_rgba(217,178,107,.08)] hover:border-border"}`}
    >
      <div className="mt-1 sm:flex sm:justify-center">{icon}</div>
      <div className="flex flex-col items-start sm:items-center sm:justify-center">
        <h3 className="font-serif text-gold text-[15px]">{title}</h3>
        <p className="mt-2 text-[12px] text-[#9B9B9B]">{description}</p>
      </div>
    </button>
  );
};
export default ExperienceCard;
