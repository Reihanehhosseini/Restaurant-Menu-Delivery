import { useFormikContext } from "formik";
import ExperienceCard from "./ExperienceCard";
import {EXPERIENCES} from "../../../data/reservationData"
import { IoMdHeart } from "react-icons/io";

const ExperienceSelector = ()=>{
    const { values, setFieldValue } = useFormikContext();
    const toggleExperience = (title) => {
        const exists = values.experience.includes(title)
        if(exists){
            setFieldValue(
                "experience" , values.experience.filter((item) => item !== title)
            )
        }else{
            setFieldValue("experience",[
                ...values.experience,
                title,
            ])
        }
    }
    return(
        <div className="w-full space-y-4 flex flex-col items-center">
            <h3 className="text-lg font-serif text-gold">Enhance Your Experience</h3>
            <div className="w-full space-y-4 sm:flex sm:gap-3">
                {EXPERIENCES.map((item)=>(
                    <ExperienceCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    active={values.experience.includes(item.title)}
                    onClick={()=> toggleExperience(item.title)}
                    icon={item.icon}
                    />
                ))}
            </div>
        </div>
    )
}

export default ExperienceSelector