import Hero from "@/components/Hero";
import { client } from "@/lib/sanity";
import ProductClient from "./ProductClient";

export const revalidate = 60;

const ProductPage = async () => {
  const query = `*[_type == "product"] | order(category asc, brand asc) {
    brand,
    model,
    category,
    price,
    image,
    description,
    features,
    tags,
    specs
  }`;
  const products = await client.fetch(query);

  return (
    <div className="overflow-x-hidden">
      <Hero
        Image="images/carousel-2.jpg"
        section="Our Products"
        desc="We supply and install Australia's leading solar brands — Tier 1 panels, premium batteries, reliable inverters and smart EV chargers."
      />

      <div className="py-10 md:py-16 px-4 font-sans">
        <div className="max-w-6xl mx-auto">
          <ProductClient sanityProducts={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
