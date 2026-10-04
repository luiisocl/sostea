import Link from "next/link";
import { CabecalhoPagina, Colunas } from "@/components/Editorial";

export default function NaoEncontrada() {
  return (
    <>
      <CabecalhoPagina numero="404" secao="Página não encontrada" titulo="Esta página não existe">
        <p>O endereço pode ter mudado ou ter sido digitado com algum erro.</p>
      </CabecalhoPagina>
      <div className="mt-10">
        <Colunas>
          <p>
            <Link href="/">Voltar para o início</Link>
          </p>
        </Colunas>
      </div>
    </>
  );
}
