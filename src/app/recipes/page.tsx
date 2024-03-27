import AddRecipe from "@/components/recipes/addRecipe";
import Recipe from "@/components/recipes/receipe";
import { db } from "@/db/connection";
import { recipeSchema } from "@/db/schema";

export default async function Page() {
  const recipes = await db.select().from(recipeSchema);
  return (
    <div className="p-4 flex flex-col gap-4">
      <AddRecipe />
      <ul className="flex flex-col gap-4">
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Recipe
              id={recipe.id}
              name={recipe.name}
              duration={recipe.duration}
              isEditable={false}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
