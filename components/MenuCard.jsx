
import Image from "next/image";

export default function MenuCard({
  name,
  category,
  description,
  price,
  image,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

      {/* Food Photograph */}
      {image ? (
        <div className="relative h-64 w-full bg-amber-50">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain"
          />
        </div>
      ) : (
        <div className="h-64 bg-emerald-100 flex items-center justify-center">
          <span className="text-5xl">🍽️</span>
        </div>
      )}

      {/* Menu Card Content */}
      <div className="p-6">

        <p className="text-sm font-semibold text-amber-700 mb-2">
          {category}
        </p>

        <h3 className="text-xl font-bold text-emerald-950 mb-3">
          {name}
        </h3>

        <p className="text-gray-600 mb-4">
          {description}
        </p>

        <p className="text-2xl font-bold text-emerald-900">
          ${price.toFixed(2)}
        </p>

      </div>
    </div>
  );
}
