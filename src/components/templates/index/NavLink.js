import React from 'react'
import { BiSolidDish } from "react-icons/bi";
import { MdPeopleAlt } from "react-icons/md";
import Button from "@/components/modules/Button";

export default function NavLink() {
  
  return (
    <div className="w-auto flex flex-col items-center justify-center gap-6  md:mb-5!">
      <Button
        title="RESTAURANT MENU"
        icon={<BiSolidDish className="fill-black w-5 h-5" />}
        link={"/menu"}
        
      />
      <Button
        title="ABOUT US"
        icon={<MdPeopleAlt className="fill-black w-5 h-5" />}
        link={"/about"}
      />
      <Button
        title="My Location"
        icon={<MdPeopleAlt className="fill-black w-5 h-5" />}
        link={"/location"}
      />
    </div>
  );
}
