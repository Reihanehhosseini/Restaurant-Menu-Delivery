"use client";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import TimeSelector from "./TimeSelector";
import GuestCounter from "./GuestCounter";
import FormInput from "./FormInput";
import TextArea from "./TextArea";
import ExperienceSelector from "./ExperienceSelector";
import SubmitButton from "./SubmitButton";
import reservationSchema from "@/validation/reservationSchema";
import ReservationDatePicker from "./DatePicker";

import Modal from "@/components/ui/Modal";

import { IoMdClose } from "react-icons/io";
import { MdOutlineDone } from "react-icons/md";

export default function FormReserve() {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);

  };
  const initialValues = {
    date: "",
    time: "",
    guests: 2,
    fullName: "",
    email: "",
    phone: "",
    specialRequest: "",
    experience: [],
  };
  const handleSubmut = async(values) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve , 1000))
    setOpen(true)
  };
  return (
    <div className="w-full flex-col border-2 border-bordertest/30 bg-linear-to-b from-[#000000] to-[#101010] shadow-[0_0px_0_1px_rgba(217,178,107,.08)] rounded-2xl flex items-center mt-3 px-3">
      <h1 className="text-gold text-sm mt-4 mb-6">Choose Your Experience</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmut}
        validationSchema={reservationSchema}
      >
        <Form className="w-full px-2 sm:px-10 space-y-6 mb-3">
          <ReservationDatePicker />
          <TimeSelector />
          <GuestCounter />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput name="fullName" placeholder="Full Name" />
            <FormInput name="email" placeholder="Email Address" type="email" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput name="phone" type="tel" placeholder="Phone Number" />
          </div>
          <TextArea name="specialRequest" placeholder="Any special requests?" />
          <ExperienceSelector />
          <SubmitButton openModal={openModal} />
        </Form>
      </Formik>
      {open && (
        <Modal close={() => setOpen(false)}>
          <div className="w-[90%] h-[50%] rounded-[10px] border border-lightGold bg-black shadow-[0_0_0_1px_rgba(217,178,107,.08) flex flex-col items-center gap-3 p-3">
            <div className="w-full flex justify-end">
              <IoMdClose
                className="size-4 fill-gold"
                onClick={() => setOpen(false)}
              />
            </div>
            <div className="w-full flex justify-center">
              <span className="border p-2 rounded-full text-gold">
                <MdOutlineDone className="size-4 iphon11:size-6" />
              </span>
            </div>
            <div className="w-full flex justify-center text-gold mt-4 font-serif text-sm iphon11:text-[16px]">
              RESERVATION CONFIRMED
            </div>
            <div className="text-[12px] text-white flex flex-col text-center">
              <span>Thank you for your reservation.</span>
              <span>We look forward to welcoming you.</span>
            </div>
            <div
              onClick={() => setOpen(false)}
              className="px-4 py-2  text-gold text-sm  mt-7 rounded-[10px] border border-bordertest/30 bg-linear-to-b from-[#151515] to-[#101010] shadow-[0_0_0_1px_rgba(217,178,107,.08)]"
            >
              Done
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
