import AddShoppingItem from "@/components/shoppingList/addItem";
import ShoppingItem from "@/components/shoppingList/shoppingItem";
import { db } from "@/db/connection";
import { shoppingListSchema } from "@/db/schema";

export default async function Page() {
  const shoppingList = await db.select().from(shoppingListSchema);
  return (
    <div>
      <AddShoppingItem></AddShoppingItem>
      {shoppingList.map((item) => (
        <ShoppingItem {...item}></ShoppingItem>
      ))}
    </div>
  );
}
