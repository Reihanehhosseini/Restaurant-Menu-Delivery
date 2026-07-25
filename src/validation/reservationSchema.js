import * as Yup from "yup"

const reservationSchema = Yup.object({
    date: Yup.string().required(),
    time: Yup.string().required(),
    guests: Yup.number().required(),
    fullName: Yup.string().min(3).required(),
    email:Yup.string().email().required(),
    specialRequest:Yup.string()
    

});
export default reservationSchema