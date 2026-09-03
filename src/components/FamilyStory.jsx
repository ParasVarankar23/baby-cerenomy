const story = [
  {
    emoji: "👨",
    title: "मिलन काते",
    subtitle: "वडील",
  },
  {
    emoji: "👩",
    title: "रिया काते",
    subtitle: "आई",
  },
  {
    emoji: "👧",
    title: "ओवी काते",
    subtitle: "बहीण",
  },
  {
    emoji: "👧",
    title: "विश्वा काते",
    subtitle: "बहीण",
  },
  {
    emoji: "👶",
    title: "चिमुकले बाळ",
    subtitle: "३ सप्टेंबर २०२६",
  },
];

export default function FamilyStory() {
  return (
    <section className="section-pad bg-[#fffdf8]">
      <div className="mx-auto max-w-6xl text-center">
        <p className="font-hand text-xl text-[#c9785f]">
          आमची छोटीशी गोष्ट
        </p>

        <h2 className="mt-3 text-4xl font-extrabold text-[#5b3d4a] md:text-6xl">
          एका कुटुंबात वाढलेला आनंद
        </h2>

        <div className="relative mt-14">
          <div className="absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-[#d8bf8b] md:block" />

          <div className="space-y-7">
            {story.map((item, index) => (
              <div
                key={item.title}
                className={`relative flex items-center gap-5 md:w-1/2 ${
                  index % 2 === 0
                    ? "md:pr-12"
                    : "md:ml-auto md:pl-12"
                }`}
              >
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-3xl shadow-lg ring-1 ring-[#d8bf8b]/50">
                  {item.emoji}
                </div>

                <div className="soft-card flex-1 rounded-2xl p-5 text-left">
                  <h3 className="text-xl font-bold text-[#5b3d4a]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-[#7b686e]">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}