export default function InvitationCard() {
  return (
    <section id="invitation" className="section-pad bg-[#fff3e9]">
      <div className="mx-auto max-w-4xl text-center">
        <div className="rounded-[2.5rem] border border-[#d8bf8b]/60 bg-[#fffdf8] p-8 shadow-2xl md:p-16">
          <div className="text-4xl">🪷</div>

          <p className="mt-5 text-sm font-semibold tracking-[0.3em] text-[#9b6c57]">
            श्री गणेशाय नमः
          </p>

          <h2 className="mt-6 text-5xl font-extrabold text-[#c9785f] md:text-7xl">
            बारसं सोहळा
          </h2>

          <div className="mx-auto my-8 h-px w-32 bg-[#d8bf8b]" />

          <p className="text-lg leading-9 text-[#6f5a60] md:text-xl">
            आमच्या लाडक्या चिमुकल्याच्या
            <br />
            बारशाच्या मंगल सोहळ्यास
            <br />
            आपण सहकुटुंब उपस्थित राहून
            <br />
            बाळास आशीर्वाद द्यावेत,
            <br />
            ही प्रेमाची आग्रहाची विनंती. 🙏
          </p>

          <div className="mt-10">
            <p className="font-hand text-xl text-[#6f8062]">
              प्रेमाने आमंत्रित करणारे
            </p>

            <h3 className="mt-2 text-3xl font-bold text-[#5b3d4a]">
              मिलन & रिया काते
            </h3>

            <p className="mt-2 text-[#7b686e]">
              ओवी • विश्वा • आणि परिवार
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <InfoBox
              title="तारीख"
              value="१४ सप्टेंबर २०२६"
              icon="📅"
            />

            <InfoBox
              title="वार"
              value="सोमवार"
              icon="🌸"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBox({ title, value, icon }) {
  return (
    <div className="rounded-2xl bg-[#fff1bc]/45 p-6">
      <div className="text-2xl">{icon}</div>

      <p className="mt-2 text-sm text-[#8b7479]">
        {title}
      </p>

      <p className="mt-1 text-xl font-bold text-[#5b3d4a]">
        {value}
      </p>
    </div>
  );
}