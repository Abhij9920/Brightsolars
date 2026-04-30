import Hero from "@/components/Hero";
import { client } from "@/lib/sanity";
import GalleryClient from "./GalleryClient";

export const revalidate = 60;

const GalleryPage = async () => {
  const query = `*[_type == "galleryItem"] | order(_createdAt desc) {
    title,
    category,
    image
  }`;
  const galleryItems = await client.fetch(query);

  return (
    <div className="overflow-x-hidden">
      <Hero
        Image="images/carousel-1.jpg"
        section="Gallery"
        desc="Browse our recent solar installations across Melbourne and regional Victoria."
      />

      <div className="py-10 md:py-16 px-4 font-sans">
        <div className="max-w-6xl mx-auto">
          <GalleryClient items={galleryItems} />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
