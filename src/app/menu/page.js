import { getProducts } from "@/lib/product";
import MenuClient from "@/components/templates/menu/MenuClient";

export default function page() {
  const products = getProducts();

  return <MenuClient products={products} />;
}
