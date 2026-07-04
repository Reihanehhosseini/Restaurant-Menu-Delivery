
import { PiCoffeeBold } from "react-icons/pi";
import { SiCoffeescript } from "react-icons/si";
import { BiDrink } from "react-icons/bi";
import { GiCupcake } from "react-icons/gi";
import { PiHamburger } from "react-icons/pi";
import { GiFullPizza } from "react-icons/gi";


 const menuCategories = [
   {
     id: "hot-tea",
     label: "Hot Tea",
     icon: PiCoffeeBold,
     items: [
       {
         id: "ht1",
         name: "Earl Grey",
         price: 2.5,
         image: "/images/drink.PNG",
       },
       {
         id: "ht2",
         name: "Green Tea",
         price: 2.0,
         image: "/images/pizza.png",
       },
       {
         id: "ht3",
         name: "Chamomile",
         price: 2.75,
         image: "/images/pizza.png",
       },
     ],
   },
   {
     id: "espresso",
     label: "Espresso",
     icon: SiCoffeescript,
     items: [
       {
         id: "e1",
         name: "Espresso",
         price: 3.0,
         image: "/images/pizza.png",
       },
       {
         id: "e2",
         name: "Irish Coffee",
         price: 3.0,
         image: "/images/pizza.png",
       },
       {
         id: "e3",
         name: "Americano",
         price: 3.5,
         image: "/images/pizza.png",
       },
       {
         id: "e4",
         name: "Flat White",
         price: 4.0,
         image: "/images/pizza.png",
       },
     ],
   },
   {
     id: "cold",
     label: "Cold",
     icon: BiDrink,
     items: [
       {
         id: "c1",
         name: "Iced Latte",
         price: 4.5,
         image: "/images/pizza.png",
       },
       {
         id: "c2",
         name: "Cold Brew",
         price: 4.0,
         image: "/images/pizza.png",
       },
       {
         id: "c3",
         name: "Frappuccino",
         price: 5.0,
         image: "/images/pizza.png",
       },
     ],
   },
   {
     id: "pastries",
     label: "Pastries",
     icon: GiCupcake,
     items: [
       {
         id: "p1",
         name: "Croissant",
         price: 2.5,
         image: "/images/pizza.png",
       },
       {
         id: "p2",
         name: "Blueberry Muffin",
         price: 3.0,
         image: "/images/pizza.png",
       },
       {
         id: "p3",
         name: "Cinnamon Roll",
         price: 3.5,
         image: "/images/pizza.png",
       },
     ],
   },
   {
     id: "burger",
     label: "Burger",
     icon: PiHamburger,
     items: [
       {
         id: "b1",
         name: "Classic Burger",
         price: 8.5,
         image: "/images/burger.PNG",
       },
       {
         id: "b2",
         name: "Cheese Burger",
         price: 9.0,
         image: "/images/burger2.png",
       },
       {
         id: "b3",
         name: "BBQ Burger",
         price: 9.5,
         image: "/images/burger3.PNG",
       },
     ],
   },
   {
     id: "pizza",
     label: "Pizza",
     icon: GiFullPizza,
     items: [
       {
         id: "pz1",
         name: "Margherita",
         price: 10.0,
         image: "/images/pizza.png",
       },
       {
         id: "pz2",
         name: "Pepperoni",
         price: 11.5,
         image: "/images/pizza2.png",
       },
       {
         id: "pz3",
         name: "Quattro Formaggi",
         price: 12.0,
         image: "/images/pizza.png",
       },
     ],
   },
 ];

export default menuCategories