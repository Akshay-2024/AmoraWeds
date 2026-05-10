import Image from "next/image";

const works = [
  {
    title: "Arjun & Meera",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
  },

  {
    title: "Rahul & Diya",
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf",
  },

  {
    title: "Akhil & Devika",
    image:
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde",
  },
];

export default function PortfolioPage() {
  return (
    <section className="section-padding min-h-screen">
      <div className="container-custom">

        <div className="text-center">
          <h1 className="text-5xl font-bold">
            Previous Works
          </h1>

          <p className="mt-4 text-gray-600">
            Some wedding websites we crafted.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {works.map((work) => (
            <div
              key={work.title}
              className="rounded-3xl overflow-hidden shadow-xl bg-white"
            >
              <Image
                src={work.image}
                alt={work.title}
                width={500}
                height={500}
                className="w-full h-[350px] object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold">
                  {work.title}
                </h2>

                <p className="mt-3 text-gray-600">
                  Elegant custom wedding website
                  designed by AmoeraWeds.
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}