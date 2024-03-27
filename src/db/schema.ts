import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const recipeSchema = pgTable("recipe", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  duration: text("duration").notNull(),
});

export const ingredientSchema = pgTable("ingredient", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  amount: text("amount").notNull(),
  unitOfMeasurement: text("unitOfMeasurement").notNull(),
  recipeId: integer("recipe_id")
    .references(() => recipeSchema.id)
    .notNull(),
});

export const shoppingListSchema = pgTable("shoppingList", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  amount: text("amount").notNull(),
});

export type IngredientType = typeof ingredientSchema.$inferSelect;
export type RecipeType = typeof recipeSchema.$inferSelect;
export type ShoppingListType = typeof shoppingListSchema.$inferSelect;
