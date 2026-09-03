export default function LocationSection() {
  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=Nagloli%2C%20Donguri%2C%20Shrivardhan%2C%20Raigad%2C%20Maharashtra";

  return (
    <section className="section-pad bg-[#dfe9cf]/60">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <div className="text-5xl">📍</div>

          <p className="mt-4 font-hand text-xl text-[#6f8062]">
            आपली वाट पाहत आहोत...
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-[#5b3d4a] md:text-6xl">
            सोहळ्याचे ठिकाण
          </h2>
        </div>

        <div className="mt-12 rounded-[2rem] bg-[#fffdf8] p-8 text-center shadow-2xl md:p-12">
          <h3 className="text-3xl font-bold text-[#c9785f]">
            मु. नागलोली
          </h3>

          <p className="mt-5 text-lg leading-9 text-[#6f5a60]">
            पो. दान्द्गुरी
            <br />
            ता श्रीवर्धन
            <br />
            जि रायगड
            <br />
            महाराष्ट्र
          </p>

          <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-[#6f8062] px-8 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1"
          >
            📍 Google Maps वर मार्ग पहा
          </a>
        </div>
      </div>
    </section>
  );
}