import Image from "next/image";

export default function BabyArrival() {
  return (
    <section className="relative bg-[#dceef3]/60 px-5 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">

        {/* TEXT */}
        <div className="text-center md:text-left">

          <p className="font-hand text-xl text-[#6f8062]">
            ३ सप्टेंबर २०२६
          </p>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[#5b3d4a] md:text-6xl">
            आमच्या आयुष्यातील
            <br />
            सर्वात सुंदर आगमन...
          </h2>

          <p className="mt-7 text-lg leading-9 text-[#6f5a60]">
            एका चिमुकल्या जीवाच्या आगमनाने
            आमच्या घरात आनंदाची नवी पहाट झाली.
            छोट्याशा हातांनी आमचे संपूर्ण जग
            प्रेमाने भरून गेले आहे. 👶
          </p>

          <div className="mt-8 inline-flex rounded-full bg-white/80 px-6 py-3 text-sm font-semibold shadow-sm">
            👶 आमचा चिमुकला आशीर्वाद
          </div>

        </div>

        {/* BABY IMAGE */}
        <div className="flex justify-center">

          <div className="w-full max-w-md rotate-1 rounded-[2.5rem] bg-white p-3 shadow-2xl">

            <div className="overflow-hidden rounded-[2rem] bg-[#fff3e9]">

              <Image
                src="/images/baby.jpg"
                alt="चिमुकले बाळ"
                width={600}
                height={600}
                className="aspect-square w-full object-cover"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}