export type ColorOption = {
  label: string;
  image: string;
  /** Foto de detalhe/close-up — hover no desktop, swipe no mobile */
  detailImage?: string;
  /** Hex amostrado do tecido na foto real do produto */
  hex: string;
};

export type PriceTier = {
  rangeLabel: string;
  minQty: number;
  price: number;
};

export type Product = {
  id: string;
  anchor: string;
  name: string;
  /** Rótulo curto da aba do catálogo — mesmo texto do menu do header */
  tabLabel: string;
  /** Nome no singular — kicker do card de variante e texto alternativo */
  singularName: string;
  /** Legenda única da categoria, exibida acima da grade (não por card) */
  description: string;
  /** Preço unitário base — o relógio usa priceTiers no lugar */
  priceLabel?: string;
  unitPrice?: number;
  priceNote?: string;
  colors: ColorOption[];
  sizes?: string[];
  priceTiers?: PriceTier[];
};

export const products: Product[] = [
  {
    id: "camiseta",
    anchor: "camisetas",
    name: "Camisetas básicas",
    tabLabel: "Camisetas",
    singularName: "Camiseta básica",
    description: "14 cores · Do P ao GG · R$ 10,90, sem pedido mínimo",
    priceLabel: "R$ 10,90",
    unitPrice: 10.9,
    priceNote: "sem pedido mínimo",
    sizes: ["P", "M", "G", "GG"],
    colors: [
      {
        label: "Preta",
        image: "/images/camiseta-preta.png",
        detailImage: "/images/detalhes-preta.png",
        hex: "#131313",
      },
      {
        label: "Verde",
        image: "/images/camiseta-verde.png",
        detailImage: "/images/detalhes-verde.png",
        hex: "#3C3C27",
      },
      {
        label: "Roxa",
        image: "/images/camiseta-roxa.png",
        detailImage: "/images/detalhes-roxa.png",
        hex: "#633997",
      },
      {
        label: "Marrom",
        image: "/images/camiseta-marrom.png",
        detailImage: "/images/detalhes-marrom.png",
        hex: "#573E32",
      },
      {
        label: "Azul-marinho",
        image: "/images/camiseta-azul-marinho.png",
        detailImage: "/images/detalhes-azul-marinho.png",
        hex: "#1D243B",
      },
      {
        label: "Rosa",
        image: "/images/camiseta-rosa.png",
        detailImage: "/images/detalhes-rosa.png",
        hex: "#F5BFD1",
      },
      {
        label: "Azul royal",
        image: "/images/camiseta-azul.png",
        detailImage: "/images/detalhes-azul.png",
        hex: "#0E45B1",
      },
      {
        label: "Bege",
        image: "/images/camiseta-bege.png",
        detailImage: "/images/detalhes-bege.png",
        hex: "#C3AD97",
      },
      {
        label: "Amarela",
        image: "/images/camiseta-amarela.png",
        detailImage: "/images/detalhes-amarela.png",
        hex: "#FCD443",
      },
      {
        label: "Vermelha",
        image: "/images/camiseta-vermelha.png",
        detailImage: "/images/detalhes-vermelha.png",
        hex: "#BF0A1A",
      },
      {
        label: "Branca",
        image: "/images/camiseta-branca.png",
        detailImage: "/images/detalhes-branca.png",
        hex: "#DEDEE3",
      },
      {
        label: "Off white",
        image: "/images/camiseta-offwhite.png",
        detailImage: "/images/detalhes-offwhite.png",
        hex: "#ECE6DE",
      },
      {
        label: "Bordô",
        image: "/images/camiseta-bordo.png",
        detailImage: "/images/detalhes-bordo.png",
        hex: "#661020",
      },
      {
        label: "Cinza",
        image: "/images/camiseta-cinza.png",
        detailImage: "/images/detalhes-cinza.png",
        hex: "#A6A6A8",
      },
    ],
  },
  {
    id: "infantil",
    anchor: "camisetas-infantis",
    name: "Camisetas infantis",
    tabLabel: "Infantil",
    singularName: "Camiseta infantil",
    description: "5 cores · Do 2 ao 14 · R$ 10,30, sem pedido mínimo",
    priceLabel: "R$ 10,30",
    unitPrice: 10.3,
    priceNote: "sem pedido mínimo",
    sizes: ["2", "4", "6", "8", "10", "12", "14"],
    colors: [
      { label: "Preta", image: "/images/infantil-preta.png", hex: "#1A1A1A" },
      { label: "Branca", image: "/images/infantil-branca.png", hex: "#EBEAED" },
      {
        label: "Vermelha",
        image: "/images/infantil-vermelha.png",
        hex: "#C50615",
      },
      { label: "Azul", image: "/images/infantil-azul.png", hex: "#0534AE" },
      { label: "Rosa", image: "/images/infantil-rosa.png", hex: "#F6B3C6" },
    ],
  },
  {
    id: "moletom",
    anchor: "moletom",
    name: "Moletom canguru",
    tabLabel: "Moletom",
    singularName: "Moletom canguru",
    description: "5 cores · Do P ao GG · R$ 32,90, sem pedido mínimo",
    priceLabel: "R$ 32,90",
    unitPrice: 32.9,
    priceNote: "sem pedido mínimo",
    sizes: ["P", "M", "G", "GG"],
    colors: [
      {
        label: "Preto",
        image: "/images/moletom-preto.png",
        detailImage: "/images/detalhes-moletom.png",
        hex: "#19191A",
      },
      {
        label: "Branco",
        image: "/images/moletom-branco.png",
        detailImage: "/images/detalhes-moletom-branco.png",
        hex: "#F0EFF3",
      },
      {
        label: "Cinza",
        image: "/images/moletom-cinza.png",
        detailImage: "/images/detalhes-moletom-cinza.png",
        hex: "#9B999F",
      },
      {
        label: "Bordô",
        image: "/images/moletom-bordo.png",
        detailImage: "/images/detalhes-moletom-bordo.png",
        hex: "#4C0818",
      },
      {
        label: "Azul-marinho",
        image: "/images/moletom-azul-marinho.png",
        detailImage: "/images/detalhes-moletom-azul-marinho.png",
        hex: "#131728",
      },
    ],
  },
  {
    id: "bucket",
    anchor: "bucket",
    name: "Chapéu bucket",
    tabLabel: "Bucket",
    singularName: "Chapéu bucket",
    description: "8 cores · Tamanho único 57cm · R$ 8,50, sem pedido mínimo",
    priceLabel: "R$ 8,50",
    unitPrice: 8.5,
    priceNote: "sem pedido mínimo",
    colors: [
      { label: "Preto", image: "/images/chapeu-preto.png", hex: "#151515" },
      { label: "Azul", image: "/images/chapeu-azul.png", hex: "#022480" },
      { label: "Vermelho", image: "/images/chapeu-vermelho.png", hex: "#B70912" },
      { label: "Rosa", image: "/images/chapeu-rosa.png", hex: "#E29EB0" },
      { label: "Roxo", image: "/images/chapeu-roxo.png", hex: "#72499C" },
      { label: "Amarelo", image: "/images/chapeu-amarelo.png", hex: "#EAB407" },
      { label: "Verde", image: "/images/chapeu-verde.png", hex: "#1F5030" },
      { label: "Branco", image: "/images/chapeu-branco.png", hex: "#DAD9DC" },
    ],
  },
  {
    id: "relogio",
    anchor: "relogios",
    name: "Relógios",
    tabLabel: "Relógios",
    singularName: "Relógio",
    description: "Compre mais, pague menos.",
    colors: [
      {
        label: "Preto",
        image: "/images/relogio.png",
        detailImage: "/images/detalhes-relogio.png",
        hex: "#151515",
      },
    ],
    priceTiers: [
      { rangeLabel: "1–9 un", minQty: 1, price: 4.0 },
      { rangeLabel: "10–99 un", minQty: 10, price: 3.5 },
      { rangeLabel: "100+ un", minQty: 100, price: 3.0 },
    ],
  },
];

export function formatPrice(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function getProduct(id: string): Product {
  const product = products.find((p) => p.id === id);
  if (!product) throw new Error(`Produto desconhecido: ${id}`);
  return product;
}

/** Preço unitário vigente — resolve a faixa escalonada pela quantidade */
export function unitPriceFor(product: Product, qty: number): number {
  if (product.priceTiers) {
    const tier = [...product.priceTiers]
      .reverse()
      .find((t) => qty >= t.minQty);
    return (tier ?? product.priceTiers[0]).price;
  }
  return product.unitPrice ?? 0;
}
