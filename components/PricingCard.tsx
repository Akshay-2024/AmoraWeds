type PricingCardProps = {
  title: string;
  subtitle: string;
  bestFor: string;
  price: string;
  delivery: string;
  themes: string;
  features: string[];
  addons: string[];
};

export default function PricingCard({
  title,
  subtitle,
  bestFor,
  price,
  delivery,
  themes,
  features,
  addons,
}: PricingCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 border hover:scale-[1.02] transition duration-300">

      <div className="mb-6">

        <h2 className="text-3xl font-bold">
          {title}
        </h2>

        <p className="text-yellow-700 font-medium mt-2">
          {subtitle}
        </p>

      </div>

      <p className="text-gray-600 leading-7">
        {bestFor}
      </p>

      <h3 className="text-4xl font-bold mt-8 text-yellow-700">
        {price}
      </h3>

      <p className="mt-2 text-gray-500">
        Delivery: {delivery}
      </p>

      <p className="mt-2 text-gray-500">
        {themes}
      </p>

      {/* Features */}

      <div className="mt-8">

        <h4 className="font-bold text-xl mb-4">
          Included Features
        </h4>

        <ul className="space-y-3">

          {features.map((feature) => (
            <li
              key={feature}
              className="text-gray-700"
            >
              ✓ {feature}
            </li>
          ))}

        </ul>

      </div>

      {/* Addons */}

      <div className="mt-8">

        <h4 className="font-bold text-xl mb-4">
          Optional Addons
        </h4>

        <ul className="space-y-3">

          {addons.map((addon) => (
            <li
              key={addon}
              className="text-gray-700"
            >
              + {addon}
            </li>
          ))}

        </ul>

      </div>

      {/* Button */}

      <a
        href={`https://wa.me/91XXXXXXXXXX?text=Hi AmoeraWeds, I am interested in the ${title}`}
        target="_blank"
        className="block text-center mt-10 bg-yellow-700 text-white py-4 rounded-full hover:opacity-90 transition"
      >
        Book This Package
      </a>

    </div>
  );
}