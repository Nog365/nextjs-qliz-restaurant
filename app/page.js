
import Image from "next/image";
import Link from "next/link";
import MenuCard from "../components/MenuCard";
import { menuItems } from "../data/menu";

export default function Home() {
  return (
    <main className="bg-amber-50 min-h-screen">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Hero Text */}
          <div>
            <p className="text-amber-700 font-semibold mb-4">
              A Taste of Africa, Reimagined.
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-emerald-950 mb-6">
              Experience the Rich Flavors of Africa
            </h1>

            <p className="text-lg text-gray-700 mb-8">
              Welcome to QLiz Contemporary African Dining,
              where traditional African flavors meet modern
              culinary creativity. Enjoy unforgettable meals,
              warm hospitality, and authentic African cuisine.
            </p>

            <Link
              href="/menu"
              className="inline-block bg-emerald-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-800 transition"
            >
              Explore Our Menu
            </Link>
          </div>

          {/* Hero Photograph */}
          <div className="relative h-80 md:h-[450px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/jollof-rice.png"
              alt="Jollof Rice and Grilled Chicken at QLiz"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* Menu Introduction */}
      <section className="bg-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-6">
            Discover Our Signature Dishes
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            From delicious Jollof Rice and flavorful Beef Suya
            to traditional Egusi Soup, every dish tells a
            story of African culture and culinary excellence.
          </p>

          <Link
            href="/menu"
            className="inline-block border-2 border-emerald-900 text-emerald-900 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-900 hover:text-white transition"
          >
            View Full Menu
          </Link>

        </div>
      </section>

{/* Featured Dishes Section */}
<section className="bg-amber-50 py-20 px-6">
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-4">
        Our Featured Dishes
      </h2>

      <p className="text-lg text-gray-600">
        Explore some of the signature flavors of QLiz.
      </p>
    </div>

    {/* Featured Menu Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {menuItems.slice(0, 3).map((item) => (
        <MenuCard
          key={item.id}
          name={item.name}
          category={item.category}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>

    {/* View Menu Button */}
    <div className="text-center mt-12">
      <Link
        href="/menu"
        className="inline-block bg-emerald-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-800 transition"
      >
        Explore Full Menu
      </Link>
    </div>

  </div>
</section>
      
{/* Why Choose QLiz Section */}
<section className="bg-white py-20 px-6">
  <div className="max-w-7xl mx-auto">

    {/* Section Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-4">
        Why Choose QLiz?
      </h2>

      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        At QLiz Contemporary African Dining, we bring
        together authentic flavors, modern creativity,
        and exceptional hospitality.
      </p>
    </div>

    {/* Feature Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Feature 1 */}
      <div className="bg-amber-50 p-8 rounded-xl shadow-md text-center">
        <div className="text-5xl mb-6">🍲</div>

        <h3 className="text-2xl font-bold text-emerald-950 mb-4">
          Authentic African Flavors
        </h3>

        <p className="text-gray-700">
          Discover traditional African recipes made
          with flavorful spices, fresh ingredients,
          and a passion for culinary excellence.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="bg-amber-50 p-8 rounded-xl shadow-md text-center">
        <div className="text-5xl mb-6">👨‍🍳</div>

        <h3 className="text-2xl font-bold text-emerald-950 mb-4">
          Contemporary Dining
        </h3>

        <p className="text-gray-700">
          Enjoy a modern dining experience where
          traditional African cuisine meets
          creativity and elegant presentation.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="bg-amber-50 p-8 rounded-xl shadow-md text-center">
        <div className="text-5xl mb-6">❤️</div>

        <h3 className="text-2xl font-bold text-emerald-950 mb-4">
          Warm Hospitality
        </h3>

        <p className="text-gray-700">
          Experience a welcoming atmosphere,
          friendly service, and memorable moments
          with family and friends.
        </p>
      </div>

    </div>
  </div>
</section>

{/* Call-to-Action Section */}
<section className="bg-emerald-950 text-white py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">

    {/* CTA Heading */}
    <h2 className="text-3xl md:text-5xl font-bold mb-6">
      Ready to Experience the Taste of Africa?
    </h2>

    {/* CTA Description */}
    <p className="text-lg text-emerald-100 mb-10">
      Discover the bold flavors, authentic recipes,
      and contemporary African dining experience
      that make QLiz truly special.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-4">

      <Link
        href="/menu"
        className="bg-amber-500 text-emerald-950 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 transition"
      >
        Explore Our Menu
      </Link>

      <Link
        href="/contact"
        className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-950 transition"
      >
        Contact Us
      </Link>

    </div>
  </div>
</section>

    </main>
  );
}
