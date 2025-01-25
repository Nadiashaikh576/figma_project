import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { Star } from "lucide-react";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
        _id,
        name,
        _type,
        image,
        price,
        description,
        reviews
      }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Product Image */}
        <div className="aspect-square">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={500}
              height={500}
              className="shadow-lg rounded-2xl border border-gray-200"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-extrabold text-gray-800">
            {product.name}
          </h1>
          <p className="text-2xl font-semibold text-gray-600">
            ${product.price}
          </p>
          <p className="text-base text-gray-500 leading-relaxed">
            {product.description ||
              "This product does not have a description yet."}
          </p>

          {/* Reviews Section */}
          <div className="flex items-center gap-2 mt-4">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`h-6 w-6 ${index < 4 ? "text-yellow-400" : "text-gray-300"}`}
              />
            ))}
            <span className="text-gray-500">(4.0/5)</span>
          </div>

          <div className="flex gap-4 mt-6">
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out py-2 px-4 rounded-lg font-semibold shadow-md">
              Buy Now
            </button>
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out py-2 px-4 rounded-lg font-semibold shadow-md">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
