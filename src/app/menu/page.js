import { getProducts } from "@/lib/product";
import MenuClient from "@/components/templates/menu/MenuClient";


export default async function page() {
  const products = await getProducts();


  return <MenuClient products={products}/>


}
