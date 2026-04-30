"use client";

import { PRODUCT_CATEGORIES } from "@/lib/content";
import { useState, useMemo } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/sanity";

interface ProductSpecs {
  type?: string;
  efficiency?: string;
  capacity?: string;
  power?: string;
  connector?: string;
  warranty?: string;
}

interface Product {
  brand: string;
  model: string;
  category?: string;
  price?: number;
  image?: string | Record<string, unknown>;
  description?: string;
  features?: string[];
  tags?: string[];
  specs?: ProductSpecs;
  type?: string;
  efficiency?: string;
  capacity?: string;
  power?: string;
  connector?: string;
  warranty?: string;
}

interface ProductCategory {
  id: string;
  label: string;
  description: string;
  products: Product[];
}

const ProductClient = ({ sanityProducts }: { sanityProducts: Product[] }) => {
  // Map Sanity products to categories, fallback to content.ts
  const categories = useMemo(() => {
    if (sanityProducts && sanityProducts.length > 0) {
      // Group sanity products by category
      const grouped: Record<string, ProductCategory> = {};
      
      // Initialize with default categories to maintain order and descriptions
      PRODUCT_CATEGORIES.forEach(cat => {
        grouped[cat.label] = {
          id: cat.id,
          label: cat.label,
          description: cat.description,
          products: []
        };
      });

      sanityProducts.forEach(product => {
        if (product.category && grouped[product.category]) {
          grouped[product.category].products.push(product);
        } else if (product.category) {
          // If category isn't in default list
          grouped[product.category] = {
            id: product.category.toLowerCase().replace(/\s+/g, '-'),
            label: product.category,
            description: `Browse our range of ${product.category}.`,
            products: [product]
          };
        }
      });

      return Object.values(grouped).filter((g: ProductCategory) => g.products.length > 0);
    }
    
    return PRODUCT_CATEGORIES;
  }, [sanityProducts]);

  const [activeCategory, setActiveCategory] = useState(categories.length > 0 ? categories[0].id : "");
  const category = categories.find((c: ProductCategory) => c.id === activeCategory) || categories[0];

  if (!category) return null;

  return (
    <>
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 md:gap-4 justify-center mb-8">
        {categories.map((cat: ProductCategory) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
              activeCategory === cat.id
                ? "bg-[#32C36C] text-white shadow-lg"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Category Description */}
      <p className="text-center text-slate-500 max-w-3xl mx-auto mb-10 text-sm md:text-base">
        {category.description}
      </p>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.products.map((product: Product, index: number) => {
          const isSanityImage = product.image && typeof product.image === 'object' && 'asset' in product.image;
          const imgSrc = isSanityImage 
            ? urlFor(product.image).url() 
            : typeof product.image === 'string' ? product.image : "";
            
          return (
            <motion.div
              key={`${category.id}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex flex-col gap-4 border border-slate-100 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="relative h-48 w-full bg-slate-100">
                  {imgSrc && (
                    <Image
                      src={imgSrc}
                      alt={`${product.brand} ${product.model}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="flex flex-col gap-3 p-5 flex-grow">
                  <div className="flex flex-wrap gap-1">
                    {product.tags?.map((tag: string) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-green-50 text-[#32C36C] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-black">{product.brand}</h3>
                  <p className="text-sm font-semibold text-slate-600">{product.model}</p>
                  <p className="text-sm text-slate-500 flex-grow">{product.description}</p>
                  
                  {product.specs && (
                    <div className="flex flex-col gap-1 text-xs text-slate-500 mt-2 border-t pt-3">
                      {product.specs.type && <span>Type: {product.specs.type}</span>}
                      {product.specs.efficiency && <span>Efficiency: {product.specs.efficiency}</span>}
                      {product.specs.capacity && <span>Capacity: {product.specs.capacity}</span>}
                      {product.specs.power && <span>Power: {product.specs.power}</span>}
                      {product.specs.connector && <span>Connector: {product.specs.connector}</span>}
                      {product.specs.warranty && <span>Warranty: {product.specs.warranty}</span>}
                    </div>
                  )}
                  {/* Fallback for static content format where specs were spread on product */}
                  {!product.specs && (
                    <div className="flex flex-col gap-1 text-xs text-slate-500 mt-2 border-t pt-3">
                      {product.type && <span>Type: {product.type}</span>}
                      {product.efficiency && <span>Efficiency: {product.efficiency}</span>}
                      {product.capacity && <span>Capacity: {product.capacity}</span>}
                      {product.power && <span>Power: {product.power}</span>}
                      {product.connector && <span>Connector: {product.connector}</span>}
                      {product.warranty && <span>Warranty: {product.warranty}</span>}
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-12">
        <Button
          size="lg"
          className="bg-[#32C36C] hover:bg-[#2B9A5A] rounded-full"
          asChild
        >
          <Link href="/quote">Get a Free Quote</Link>
        </Button>
      </div>
    </>
  );
};

export default ProductClient;
