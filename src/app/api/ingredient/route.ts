import { db } from "@/db/connection";
import { ingredientSchema } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name, amount, unitOfMeasurement, recipeId } = await request.json();
  try {
    await db
      .insert(ingredientSchema)
      .values({ name, amount, unitOfMeasurement, recipeId });
    console.info("Recipe added");
    return NextResponse.json({ status: 200 });
  } catch (e) {
    if (e instanceof Error) console.error(e.message);
    return NextResponse.json({ status: 400 });
  }
}

// do this with searchparams
export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  try {
    await db.delete(ingredientSchema).where(eq(ingredientSchema.id, id));
    console.info("Ingredient deleted");
    return NextResponse.json({ status: 200 });
  } catch (e) {
    if (e instanceof Error) console.error(e.message);
    return NextResponse.json({ status: 400 });
  }
}
