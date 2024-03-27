"use client";

import { IngredientType } from "@/db/schema";
import { useRouter } from "next/navigation";

type IngredientProps = IngredientType;

export default function Ingredient({
  id,
  name,
  amount,
  unitOfMeasurement,
}: IngredientProps) {
  const router = useRouter();

  async function handleDelete() {
    await fetch("/api/ingredient", {
      method: "DELETE",
      body: JSON.stringify({ id: id }),
      headers: { "Content-Type": "application/json" },
    });
    router.refresh();
  }
  return (
    <div>
      <p>
        {name}: {amount} {unitOfMeasurement}
      </p>
      <button onClick={handleDelete}>Zutat löschen</button>
    </div>
  );
}
