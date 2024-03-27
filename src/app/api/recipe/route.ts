import { db } from "@/db/connection";
import { recipeSchema } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name, duration } = await request.json();
  try {
    await db.insert(recipeSchema).values({ name: name, duration: duration });
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
    await db.delete(recipeSchema).where(eq(recipeSchema.id, id));
    console.info("Recipe deleted");
    return NextResponse.json({ status: 200 });
  } catch (e) {
    if (e instanceof Error) console.error(e.message);
    return NextResponse.json({ status: 400 });
  }
}

export async function PUT(request: NextRequest) {
  const { id, name, duration } = await request.json();
  console.info(id, name, duration);
  try {
    await db
      .update(recipeSchema)
      .set({ name: name, duration: duration })
      .where(eq(recipeSchema.id, id));
    console.info("Recipe updated");
    return NextResponse.json({ status: 200 });
  } catch (e) {
    if (e instanceof Error) console.error(e.message);
    return NextResponse.json({ status: 400 });
  }
}
