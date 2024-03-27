import Image from "next/image";

export default function App() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Image
          src="/images/nfl_dalle.webp"
          alt="NFL Image"
          className="w-full h-auto"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </>
  );
}
