import Link from "next/link";
import { CabecalhoPagina } from "@/components/ui";

export default function NaoEncontrada() {
  return (
    <>
      <CabecalhoPagina rotulo="Erro 404" titulo="Esta página não existe">
        <p>O endereço pode ter mudado ou ter sido digitado com algum erro.</p>
      </CabecalhoPagina>
      <div className="container-pagina mt-10 flex flex-wrap gap-3">
        <Link href="/" className="botao botao-escuro">
          Voltar para o início
        </Link>
        <Link href="/biblioteca" className="botao botao-claro">
          Ver a biblioteca
        </Link>
      </div>
    </>
  );
}
