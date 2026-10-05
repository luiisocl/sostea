import Link from "next/link";
import { categorias } from "@/lib/categorias";
import { classesCor } from "@/lib/cores";
import { IconeCirculo, SetaCirculo } from "./ui";

type Categoria = (typeof categorias)[number];

export function CardCategoria({ categoria: c, total }: { categoria: Categoria; total?: number }) {
  return (
    <Link
      href={`/biblioteca#${c.id}`}
      className={`group flex h-full gap-3 rounded-card p-4 no-underline transition-shadow hover:shadow-elevada ${classesCor[c.cor].bg}`}
    >
      <IconeCirculo icone={c.icone} cor={c.cor} />
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="font-titulo text-nota leading-snug font-bold text-marinho [hyphens:auto] group-hover:underline">
          {c.nome}
        </span>
        <span className="mt-1 text-mini text-texto-suave">
          {c.descricao}
          {total !== undefined && (
            <span className="mt-1 block font-bold text-marinho">
              {total === 1 ? "1 conteúdo" : `${total} conteúdos`}
            </span>
          )}
        </span>
        <SetaCirculo className="mt-auto self-end" />
      </span>
    </Link>
  );
}
