import AddIngredient from "@/components/recipes/addIngredient";
import Ingredient from "@/components/recipes/ingredient";
import Recipe from "@/components/recipes/receipe";
import { db } from "@/db/connection";
import { ingredientSchema, recipeSchema } from "@/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";

type Context = {
  params: { id: number };
};

export default async function Page({ params: { id } }: Context) {
  const todos = await db
    .select()
    .from(recipeSchema)
    .where(eq(recipeSchema.id, id));
  const todo = todos[0];
  const ingredients = await db
    .select()
    .from(ingredientSchema)
    .where(eq(ingredientSchema.recipeId, id));
  return (
    <div>
      <Link href="/recipes">Recipes</Link>
      <Recipe
        id={todo.id}
        name={todo.name}
        duration={todo.duration}
        isEditable={true}
      />
      <h2>Ingredients</h2>
      <AddIngredient recipeId={id} />
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>
            <Ingredient {...ingredient} />
          </li>
        ))}
      </ul>
    </div>
  );
}
