CREATE TABLE IF NOT EXISTS "shoppingList" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"amount" integer NOT NULL
);
