import Image from "next/image";

export default function ParentsSection() {
  return (
    <section className="relative bg-[#e6def7]/45 px-5 py-24 md:py-32">

      <div className="mx-auto max-w-5xl text-center">

        <p className="font-hand text-xl text-[#8b6a92]">
          या आनंदामागची दोन हृदये...
        </p>

        <h2 className="mt-3 text-4xl font-extrabold text-[#5b3d4a] md:text-6xl">
          आई आणि बाबा ❤️
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">

          <ParentCard
            image="/images/father.jpg"
            name="मिलन काते"
            relation="वडील"
            fallback="👨"
          />

          <ParentCard
            image="/images/mother.jpg"
            name="रिया काते"
            relation="आई"
            fallback="👩"
          />

        </div>

        <p className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-[#6f5a60]">
          मिलन आणि रिया काते यांच्या आयुष्यात
          एका नव्या सुंदर अध्यायाची सुरुवात झाली आहे.
        </p>

      </div>

    </section>
  );
}

function ParentCard({
  image,
  name,
  relation,
  fallback,
}) {
  return (
    <div className="rounded-[2rem] border border-[#d8bf8b]/40 bg-white/80 p-8 shadow-xl backdrop-blur">

      <div className="mx-auto flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-[#fff1bc] text-5xl shadow-lg">

        <Image
          src={image}
          alt={name}
          width={128}
          height={128}
          className="h-full w-full object-cover"
        />

      </div>

      <p className="mt-6 text-sm font-semibold tracking-[0.2em] text-[#9b6c57]">
        {relation}
      </p>

      <h3 className="mt-2 text-3xl font-bold text-[#5b3d4a]">
        {name}
      </h3>

    </div>
  );
}