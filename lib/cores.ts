// Cada categoria tem uma cor pastel. Estas classes vêm dos tokens em app/globals.css.
// (Escritas por extenso para o Tailwind encontrá-las no código.)
export type Cor = "azul" | "verde" | "rosa" | "amarelo" | "lilas";

export const classesCor: Record<Cor, { bg: string; circ: string; tom: string; etiqueta: string }> = {
  azul: { bg: "bg-azul-bg", circ: "bg-azul-circ", tom: "text-azul-tom", etiqueta: "bg-azul-circ text-azul-tom" },
  verde: { bg: "bg-verde-bg", circ: "bg-verde-circ", tom: "text-verde-tom", etiqueta: "bg-verde-circ text-verde-tom" },
  rosa: { bg: "bg-rosa-bg", circ: "bg-rosa-circ", tom: "text-rosa-tom", etiqueta: "bg-rosa-circ text-rosa-tom" },
  amarelo: { bg: "bg-amarelo-bg", circ: "bg-amarelo-circ", tom: "text-amarelo-tom", etiqueta: "bg-amarelo-circ text-amarelo-tom" },
  lilas: { bg: "bg-lilas-bg", circ: "bg-lilas-circ", tom: "text-lilas-tom", etiqueta: "bg-lilas-circ text-lilas-tom" },
};
