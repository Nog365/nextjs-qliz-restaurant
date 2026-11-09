
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-emerald-950 text-white px-6 py-6">
      <div className="max-w-7xl mx-auto">

        {/* Desktop Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-6 items-center">

            
{/* Left: QLiz Restaurant Logo */}
<div className="flex justify-center lg:justify-start">
  <Link href="/" aria-label="QLiz Home">
    <Image
      src="/images/QLiz-logo.png"
      alt="QLiz Contemporary African Dining Logo"
      width={100}
      height={100}
      className="rounded-full object-contain hover:scale-105 transition-transform"
      priority
    />
  </Link>
</div>
          
          {/* Center: Restaurant Name and Tagline */}
          <div className="text-center">
            <Link href="/" className="inline-block">
              <p className="text-2xl md:text-3xl font-bold text-white">
                QLiz Contemporary African Dining
              </p>
            </Link>

            <p className="text-amber-300 mt-2 text-base">
              A Taste of Africa, Reimagined.
            </p>
          </div>

          {/* Right: Navigation */}
          <nav
            aria-label="Main navigation"
            className="flex flex-wrap justify-center lg:justify-end items-center gap-4 xl:gap-6"
          >
            <Link
              href="/"
              className="hover:text-amber-300 transition"
            >
              Home
            </Link>

            <Link
              href="/menu"
              className="hover:text-amber-300 transition"
            >
              Menu
            </Link>

            <Link
              href="/about"
              className="hover:text-amber-300 transition"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="hover:text-amber-300 transition"
            >
              Contact
            </Link>
          </nav>

        </div>
      </div>
    </header>
  );
}
