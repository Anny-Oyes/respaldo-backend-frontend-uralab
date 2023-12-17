import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"> 
      <div className="flex flex-row items-center">
        <Image
          src="/icon.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />

        <div className="ml-2">
          <h1>
            UNIVERSIDAD DE LAS REGIONES AUTÓNOMAS DE LA COSTA CARIBE DE
            NICARAGUA
          </h1>
          <h1>URACCAN</h1>
        </div>
      </div>

      <h1>Registro de uso de laboratorio</h1>

      <div className="flex flex-col">
        <div className="mb-4">
          <Image
            src="/labs1.jpg"
            alt="Vercel Logo"
            className=""
            width={500}
            height={200}
            priority
          />
        </div>
        <div>
          <Image
            src="/labs2.jpg"
            alt="Vercel Logo"
            className=""
            width={500}
            height={200}
            priority
          />
        </div>
      </div>
    </main>
  );
}
