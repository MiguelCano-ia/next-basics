import { CartCounter } from "@/shopping-cart/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "A simple counter page",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <span>Products in the cart</span>
      <CartCounter />
    </div>
  );
}
