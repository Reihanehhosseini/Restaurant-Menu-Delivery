import { TIMES } from "../../../data/reservationData";
import { useFormikContext } from "formik";

const TimeSelector = () => {
  const { values, setFieldValue } = useFormikContext();

  return (
    <div className="space-y-4 mt-3">
      <h3 className="text-[15px] font-serif text-gold">Select Time</h3>
      <div className="grid grid-cols-3 gap-3">
        {TIMES.map((time) => (
          <button
            key={time}
            type="button"
            onClick={() => setFieldValue("time", time)}
            className={`rounded-xl text-[12px] border p-1 transition ${values.time === time ? "border-border text-gold" : "border-[#333] bg-[#161616] text-white hover:border-border"}`}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};
export default TimeSelector