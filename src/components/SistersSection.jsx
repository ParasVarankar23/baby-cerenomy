import Image from "next/image";

export default function SistersSection() {
  return (
    <section className="section-pad bg-[#dfe9cf]/60">
      <div className="mx-auto max-w-5xl text-center">
        <div className="text-4xl">🌿</div>

        <p className="mt-4 font-hand text-xl text-[#6f8062]">
          या आनंदात सर्वात उत्सुक...
        </p>

        <h2 className="mt-3 text-4xl font-extrabold text-[#5b3d4a] md:text-6xl">
          ओवी & विश्वा 👧👧
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6f5a60]">
          आपल्या चिमुकल्या भावंडाच्या स्वागतासाठी
          दोन प्रेमळ बहिणी सज्ज आहेत. 💕
        </p>

        <div className="mt-12 grid gap-7 md:grid-cols-2">
          <SisterCard
            name="ओवी काते"
            image="/images/elder.jpg"
          />

          <SisterCard
            name="विश्वा काते"
            image="/images/younger.jpg"
          />
        </div>
      </div>
    </section>
  );
}

function SisterCard({ name, image }) {
  return (
    <div className="rounded-[2rem] border border-[#a7b78f]/40 bg-[#fffdf8]/90 p-7 shadow-xl">
      <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-[#fff1bc] shadow-lg">
        <Image
          src={image}
          alt={name}
          width={128}
          height={128}
          className="h-full w-full object-cover"
        />
      </div>

      <h3 className="mt-6 text-3xl font-bold text-[#5b3d4a]">
        {name}
      </h3>

      <p className="mt-2 font-hand text-lg text-[#6f8062]">
        चिमुकल्या भावंडाची लाडकी बहीण 💕
      </p>
    </div>
  );
}