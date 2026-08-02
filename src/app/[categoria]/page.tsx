import type { Metadata } from "next";
import { notFound } from "next/navigation";
import About from "@/components/About";
import Catalog from "@/components/Catalog";
import HowItWorks from "@/components/HowItWorks";
import { products } from "@/data/products";

type Params = Promise<{ categoria: string }>;

export function generateStaticParams() {
  return products.map((product) => ({ categoria: product.anchor }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { categoria } = await params;
  const product = products.find((p) => p.anchor === categoria);
  if (!product) return {};
  return {
    title: `${product.name} | Stylos — Catálogo em Franca/SP`,
    description: `${product.name}: ${product.description} Monte seu pedido e retire em Franca/SP.`,
  };
}

export default async function CategoriaPage({ params }: { params: Params }) {
  const { categoria } = await params;
  const product = products.find((p) => p.anchor === categoria);
  if (!product) notFound();

  return (
    <main>
      <Catalog activeId={product.id} />
      <HowItWorks />
      <About />
    </main>
  );
}
