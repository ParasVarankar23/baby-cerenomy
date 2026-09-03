export default function InvitationEnvelope() {
  return (
    <section className="section-pad relative bg-[#fffdf8]">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-hand text-xl text-[#9b6c57]">
          प्रेमपूर्वक निमंत्रण
        </p>

        <div className="mx-auto mt-8 max-w-2xl rounded-[2.5rem] border border-[#d8bf8b]/60 bg-gradient-to-br from-[#fff8ef] to-[#f8eee9] p-8 shadow-2xl md:p-14">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#fff1bc] text-3xl shadow-inner">
            🪷
          </div>

          <p className="mt-8 text-sm tracking-[0.25em] text-[#9b6c57]">
            आपले हार्दिक स्वागत
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-[#5b3d4a] md:text-6xl">
            बारसं सोहळा
          </h2>

          <div className="mx-auto my-7 h-px w-24 bg-[#d8bf8b]" />

          <p className="text-lg leading-9 text-[#725f65]">
            आमच्या कुटुंबातील या मंगल आनंदाच्या क्षणी
            <br />
            आपण सहकुटुंब उपस्थित राहून
            <br />
            चिमुकल्यास आशीर्वाद द्यावेत,
            <br />
            ही मनःपूर्वक विनंती. 🙏
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-[#f7cdbb] px-5 py-2 text-sm font-semibold">
              १४ सप्टेंबर २०२६
            </span>

            <span className="rounded-full bg-[#dfe9cf] px-5 py-2 text-sm font-semibold">
              सोमवार
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}