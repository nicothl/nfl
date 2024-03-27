import { db } from "@/db/connection";
import { shoppingListSchema } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name, amount } = await request.json();
  try {
    await db.insert(shoppingListSchema).values({ name, amount });
    console.info("Shopping item added!");
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
    await db.delete(shoppingListSchema).where(eq(shoppingListSchema.id, id));
    console.info("Shopping item deleted");
    return NextResponse.json({ status: 200 });
  } catch (e) {
    if (e instanceof Error) console.error(e.message);
    return NextResponse.json({ status: 400 });
  }
}
