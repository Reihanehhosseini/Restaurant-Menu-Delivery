import { Martini } from "lucide-react";
import { PiCoffeeBold } from "react-icons/pi";
import { SiCoffeescript } from "react-icons/si";
import { GiCupcake } from "react-icons/gi";
import { PiHamburger } from "react-icons/pi";
import { GiFullPizza } from "react-icons/gi";


const products = [
  {
    id: "hot-tea",
    label: "Hot Tea",
    icon: "tea",
    items: [
      {
        id: "ht1",
        name: "Earl Grey",
        price: 2.5,
        image: "/images/menu/tea.png",
        desc: "Black tea with bergamot",
      },
      {
        id: "ht2",
        name: "Green Tea",
        price: 2.0,
        image: "/images/menu/greentea.png",
        desc: "Pure green tea",
      },
      {
        id: "ht3",
        name: "Chamomile",
        price: 2.75,
        image: "/images/menu/chamomiletea.png",
        desc: "Calming chamomile infusion",
      },
    ],
  },
  {
    id: "espresso",
    label: "Espresso",
    icon: "espresso",
    items: [
      {
        id: "e1",
        name: "Espresso",
        price: 3.0,
        image: "/images/menu/Espresso.PNG",
        desc: "Rich and bold italian espresso",
      },
      {
        id: "e2",
        name: "Irish Coffee",
        price: 3.0,
        image: "/images/menu/irish.PNG",
        desc: "Smooth coffee with Irish whiskey",
      },
      {
        id: "e3",
        name: "Americano",
        price: 3.5,
        image: "/images/menu/Americano.png",
        desc: "Espresso with hot water",
      },
      {
        id: "e4",
        name: "Flat White",
        price: 4.0,
        image: "/images/menu/flat white.png",
        desc: "Espresso with steamed milk",
      },
    ],
  },
  {
    id: "cold",
    label: "Cold",
    icon: "cold",
    items: [
      {
        id: "c1",
        name: "Iced Latte",
        price: 4.5,
        image: "/images/menu/IcedLatte.PNG",
        desc: "Espresso with chilled milk",
      },
      {
        id: "c2",
        name: "Cold Brew",
        price: 4.0,
        image: "/images/menu/Cold Brew.PNG",
        desc: "Smooth cold-steeped coffee",
      },
      {
        id: "c3",
        name: "Frappuccino",
        price: 5.0,
        image: "/images/menu/Frappuccino.PNG",
        desc: "Blended iced coffee drink",
      },
      {
        id: "c4",
        name: "Juice",
        price: 3.0,
        image: "/images/menu/juice.png",
        desc: "Freshly squeezed fruit juice",
      },
    ],
  },
  {
    id: "pastries",
    label: "Pastries",
    icon: "pastries",
    items: [
      {
        id: "p1",
        name: "Croissant",
        price: 2.5,
        image: "/images/menu/Croissant.PNG",
        desc: "Buttery French pastry",
      },
      {
        id: "p2",
        name: "Blueberry Muffin",
        price: 3.0,
        image: "/images/menu/Blueberry Muffin.PNG",
        desc: "Soft muffin with blueberries",
      },
      {
        id: "p3",
        name: "Cinnamon Roll",
        price: 3.5,
        image: "/images/menu/CinnamonRoll.PNG",
        desc: "Sweet cinnamon pastry",
      },
    ],
  },
  {
    id: "burger",
    label: "Burger",
    icon: "burger",
    items: [
      {
        id: "b1",
        name: "Classic Burger",
        price: 8.5,
        image: "/images/menu/Classic Burger.PNG",
        desc: "Beef patty with fresh toppings",
      },
      {
        id: "b2",
        name: "Cheese Burger",
        price: 9.0,
        image: "/images/menu/CheeseBurger.PNG",
        desc: "Beef patty with melted cheese",
      },
      {
        id: "b3",
        name: "BBQ Burger",
        price: 9.5,
        image: "/images/menu/BBQ Burger.png",
        desc: "Smoky beef burger with BBQ sauce",
      },
    ],
  },
  {
    id: "pizza",
    label: "Pizza",
    icon: "pizza",
    items: [
      {
        id: "pz1",
        name: "pizza Margherita",
        price: 10.0,
        image: "/images/menu/Margherita.PNG",
        desc: "Classic pizza tomato and mozzarella",
      },
      {
        id: "pz2",
        name: "pizza Pepperoni",
        price: 11.5,
        image: "/images/menu/Pepperoni.PNG",
        desc: "Pizza with spicy pepproni slices",
      },
      {
        id: "pz3",
        name: "pizza Quattro Formaggi",
        price: 12.0,
        image: "/images/menu/QuattroFormaggi.png",
        desc: "Four cheese italian pizza",
      },
    ],
  },
];

export default products;
