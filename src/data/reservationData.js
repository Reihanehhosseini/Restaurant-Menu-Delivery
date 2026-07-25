
import { IoMdHeart } from "react-icons/io";
import { GoGift } from "react-icons/go";
import { PiChefHat } from "react-icons/pi";

export const TIMES =[
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
    "11:00 PM",
]
export const EXPERIENCES = [
    {id:1, title:"Romantic Dinner" , description:"Prefer for couples" ,icon:<IoMdHeart className="size-6 fill-gold"/> },
    {id:2, title:"Celebration" , description:"Birthday & Anniversary" , icon:<GoGift className="size-6 fill-gold"/>},
    {id:3, title:"Chef Experience" , description:"Exclusive tasting menu", icon:<PiChefHat className="size-6 fill-gold"/>}
]