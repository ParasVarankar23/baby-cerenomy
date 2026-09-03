export default function EventDetails() {
  return (
    <section className="section-pad bg-[#fffdf8]">
      <div className="mx-auto max-w-5xl text-center">
        <p className="font-hand text-xl text-[#c9785f]">
          मंगल क्षण
        </p>

        <h2 className="mt-3 text-4xl font-extrabold text-[#5b3d4a] md:text-6xl">
          सोहळ्याची माहिती
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Detail
            icon="📅"
            title="तारीख"
            value="१४ सप्टेंबर २०२६"
          />

          <Detail
            icon="🌸"
            title="वार"
            value="सोमवार"
          />

          <Detail
            icon="🕐"
            title="वेळ"
            value="लवकरच कळवू"
          />

          <Detail
            icon="🎉"
            title="कार्यक्रम"
            value="बारसं सोहळा"
          />
        </div>
      </div>
    </section>
  );
}

function Detail({ icon, title, value }) {
  return (
    <div className="soft-card rounded-3xl p-7">
      <div className="text-3xl">{icon}</div>

      <p className="mt-4 text-sm text-[#8b7479]">
        {title}
      </p>

      <p className="mt-2 font-bold text-[#5b3d4a]">
        {value}
      </p>
    </div>
  );
}