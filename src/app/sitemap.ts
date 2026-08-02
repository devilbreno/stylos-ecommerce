import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    ...products.map((product) => ({
      url: `${siteUrl}/${product.anchor}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
