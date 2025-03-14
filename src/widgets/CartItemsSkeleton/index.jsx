import { CartItemSkeleton } from "@/entities/Cart/ui/CartItemSkeleton/index.jsx";

export function CartItemsSkeleton(props) {
  return Array(2)
    .fill(0)
    .map((_, index) => <CartItemSkeleton key={index} />);
}
