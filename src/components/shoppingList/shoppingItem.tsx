import { ShoppingListType } from "@/db/schema";

export default function ShoppingItem({ id, name, amount }: ShoppingListType) {
  return (
    <div className="p-4 bg-white border border-gray-400">
      <h2>Name: {name}</h2>
      <p>Menge: {amount}</p>
    </div>
  );
}
