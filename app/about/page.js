
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-amber-50">

      {/* About Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-amber-700 font-semibold mb-4">
            A Taste of Africa, Reimagined.
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-emerald-950 mb-6">
            About QLiz
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed">
            At QLiz Contemporary African Dining, we celebrate
            the rich culinary heritage of Africa by blending
            traditional flavors with modern creativity and
            warm hospitality.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Story Image */}
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/beef-suya.png"
              alt="African beef suya served at QLiz"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Story Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-6">
              Our Story
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              QLiz was inspired by a passion for African
              cuisine, culture, and hospitality.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Our vision is to create a welcoming dining
              experience where traditional African dishes
              meet contemporary presentation and innovative
              cooking techniques.
            </p>
          </div>

        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-6">
            Our Mission
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is to introduce guests to the
            diverse flavors of Africa through thoughtfully
            prepared dishes, exceptional hospitality,
            and memorable dining experiences.
          </p>

        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 text-center mb-12">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Value 1 */}
            <div className="bg-amber-50 p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-5">🌍</div>

              <h3 className="text-2xl font-bold text-emerald-950 mb-4">
                Cultural Heritage
              </h3>

              <p className="text-gray-700">
                We celebrate Africa's diverse culinary
                traditions through authentic flavors
                and meaningful food experiences.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-amber-50 p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-5">🍽️</div>

              <h3 className="text-2xl font-bold text-emerald-950 mb-4">
                Culinary Excellence
              </h3>

              <p className="text-gray-700">
                We combine quality ingredients,
                creativity, and attention to detail
                to create memorable dishes.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-amber-50 p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-5">❤️</div>

              <h3 className="text-2xl font-bold text-emerald-950 mb-4">
                Warm Hospitality
              </h3>

              <p className="text-gray-700">
                We believe every guest deserves
                a welcoming atmosphere and
                an enjoyable dining experience.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-emerald-950 text-white py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience QLiz for Yourself
          </h2>

          <p className="text-lg text-emerald-100 mb-8">
            Discover our delicious African dishes
            and explore the flavors that inspire us.
          </p>

          <Link
            href="/menu"
            className="inline-block bg-amber-500 text-emerald-950 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 transition"
          >
            Explore Our Menu
          </Link>

        </div>
      </section>

    </main>
  );
}
