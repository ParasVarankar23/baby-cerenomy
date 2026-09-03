import Image from "next/image";

const photos = [
  {
    src: "/images/family.jpg",
    label: "आमचे कुटुंब ❤️",
  },
  {
    src: "/images/father.jpg",
    label: "मिलन काते",
  },
  {
    src: "/images/mother.jpg",
    label: "रिया काते",
  },
  {
    src: "/images/elder.jpg",
    label: "ओवी काते",
  },
  {
    src: "/images/younger.jpg",
    label: "विश्वा काते",
  },
  {
    src: "/images/baby.jpg",
    label: "आमचा चिमुकला आशीर्वाद 👶",
  },
];

export default function Gallery() {
  return (
    <section className="section-pad bg-[#fffdf8]">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-hand text-xl text-[#c9785f]">
            आठवणींच्या पानांमधून
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-[#5b3d4a] md:text-6xl">
            आमच्या सुंदर आठवणी
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <div
              key={photo.src}
              className={`group overflow-hidden rounded-[2rem] bg-white p-3 shadow-xl ${
                index % 2 === 0
                  ? "rotate-1"
                  : "-rotate-1"
              }`}
            >
              <div className="overflow-hidden rounded-[1.5rem] bg-[#fff3e9]">
                <Image
                  src={photo.src}
                  alt={photo.label}
                  width={600}
                  height={600}
                  className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <p className="px-3 pb-3 pt-4 font-hand text-lg text-[#6f5a60]">
                {photo.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}