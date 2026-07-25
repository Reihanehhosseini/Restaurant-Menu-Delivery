"use client"
import { Form, Formik } from "formik";
import React from "react";
import TimeSelector from "./TimeSelector";
import GuestCounter from "./GuestCounter";
import FormInput from "./FormInput";
import TextArea from "./TextArea";
import ExperienceSelector from "./ExperienceSelector";
import SubmitButton from "./SubmitButton";
import reservationSchema from "@/validation/reservationSchema";
import ReservationDatePicker from "./DatePicker";
import { BsPencil } from "react-icons/bs";

export default function FormReserve() {
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
  const handleSubmut = (values) => {
    console.log(values);
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
          <SubmitButton />
        </Form>
      </Formik>
    </div>
  );
}
