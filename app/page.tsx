import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Brain, Heart, TriangleAlert, Users } from "lucide-react";
import { CardCategoria } from "@/components/CardCategoria";
import { DiretorioProfissionais } from "@/components/DiretorioProfissionais";
import { IconeCirculo, LinkSeta, SetaCirculo, TituloSecao } from "@/components/ui";
import { atalhosDados, destaques, guias, iconeDados as IconeDados, passosAjuda, perfis, situacoes } from "@/data/home";
import { categorias } from "@/lib/categorias";
import { classesCor } from "@/lib/cores";
import { especialidadesHome, listarProfissionais } from "@/lib/profissionais";

export default async function Inicio() {
  const profissionais = await listarProfissionais();

  return (
    <>
      {/* 1. Topo */}
      <section aria-labelledby="titulo-inicio" className="relative overflow-hidden bg-fundo-suave">
        <div className="container-pagina relative z-10 grid lg:min-h-[26rem] lg:grid-cols-12">
          <div className="py-12 lg:col-span-6 lg:py-16">
            <p className="rotulo flex flex-wrap gap-x-2">
              <span>Conhecimento</span>
              <span aria-hidden="true">•</span>
              <span>Orientação</span>
              <span aria-hidden="true">•</span>
              <span>Inclusão</span>
            </p>
            <h1 id="titulo-inicio" className="mt-4 text-display">
              Informação confiável.
              <br />
              Cuidado que <span className="text-azul">acolhe</span>.
            </h1>
            <p className="mt-5 max-w-xl text-lead text-texto">
              Orientações práticas, conteúdos educativos e uma rede de apoio para o dia a dia de
              crianças com Transtorno do Espectro Autista (TEA).
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/biblioteca" className="botao botao-escuro">
                Explorar a biblioteca
                <ArrowRight aria-hidden="true" className="h-4.5 w-4.5" />
              </Link>
              <Link href="/sobre" className="botao botao-claro">
                Saiba mais sobre o projeto
              </Link>
            </div>
          </div>
        </div>

        {/* Foto: à direita no computador, abaixo do texto no celular */}
        <div className="relative h-72 sm:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[56%]">
          <Image
            src="/images/hero-mae-e-filho.jpg"
            alt="Mãe e filho sorrindo juntos no sofá de casa."
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-[30%_40%]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 hidden w-2/5 bg-linear-to-r from-fundo-suave to-transparent lg:block"
          />
          <p className="absolute bottom-8 left-[20%] hidden max-w-56 -rotate-6 rounded-card bg-fundo/85 px-4 py-2 font-manuscrita text-manuscrito text-marinho lg:block">
            Mais compreensão para mais possibilidades.
            <Heart aria-hidden="true" className="ml-1 inline h-4 w-4 fill-azul-circ text-azul" />
          </p>
          <p className="absolute right-4 bottom-4 max-w-60 rotate-[-4deg] rounded-[48%_52%_44%_56%/56%_46%_54%_44%] bg-azul-circ px-7 py-6 font-manuscrita text-manuscrito text-marinho sm:right-8 lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2">
            Cada criança tem seu tempo, suas formas e um jeito único de ver o mundo.
          </p>
        </div>
      </section>

      {/* 2. Perfis */}
      <section aria-label="Escolha seu caminho" className="border-b border-borda">
        <div className="container-pagina flex flex-col gap-3 py-5 sm:flex-row sm:items-center">
          <p className="font-titulo text-nota font-bold text-marinho sm:mr-2">Comece por aqui:</p>
          <ul className="flex flex-wrap gap-3">
            {perfis.map(({ rotulo, href, icone: Icone, cor }) => (
              <li key={href}>
                <Link href={href} className={`botao text-branco hover:text-branco hover:opacity-90 ${cor}`}>
                  <Icone aria-hidden="true" className="h-5 w-5" />
                  {rotulo}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Biblioteca + Em destaque */}
      <div className="container-pagina mt-12 grid gap-12 xl:grid-cols-[1.4fr_1fr] xl:gap-10">
        <section aria-labelledby="titulo-biblioteca">
          <TituloSecao
            id="titulo-biblioteca"
            titulo="Explore a biblioteca"
            subtitulo="Encontre conteúdos organizados por temas e descubra orientações para o dia a dia."
            link={{ href: "/biblioteca", rotulo: "Ver todos os temas" }}
          />
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {categorias.map((c) => (
              <li key={c.id}>
                <CardCategoria categoria={c} />
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="titulo-destaque">
          <TituloSecao
            id="titulo-destaque"
            titulo="Em destaque"
            subtitulo="Conteúdos selecionados para você."
            link={{ href: "/biblioteca", rotulo: "Ver todos os conteúdos" }}
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {destaques.map((d) => (
              <li key={d.href}>
                <Link href={d.href} className="card group flex h-full overflow-hidden no-underline hover:shadow-elevada">
                  <span className="relative w-[42%] shrink-0">
                    <Image src={d.imagem} alt="" fill sizes="(min-width: 1280px) 12vw, 40vw" className="object-cover" />
                  </span>
                  <span className="flex flex-1 flex-col p-3.5">
                    <span className={`etiqueta self-start ${classesCor[d.cor].etiqueta}`}>{d.etiqueta}</span>
                    <span className="mt-2 font-titulo text-nota leading-snug font-bold text-marinho group-hover:underline">
                      {d.titulo}
                    </span>
                    <span className="mt-1 text-mini text-texto-suave">{d.resumo}</span>
                    <SetaCirculo className="mt-auto self-end" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* 4. Meu filho está... + Precisa de ajuda agora? */}
      <div className="container-pagina mt-14 grid gap-6 lg:grid-cols-[1.45fr_1fr]">
        <section aria-labelledby="titulo-situacoes" className="rounded-bloco bg-azul-bg p-6 sm:p-8">
          <div className="grid gap-6 md:grid-cols-[auto_1fr]">
            <div className="hidden md:block">
              <IconeCirculo icone={Heart} cor="azul" tamanho="lg" />
            </div>
            <div>
              <h2 id="titulo-situacoes" className="text-h2">Meu filho está...</h2>
              <p className="mt-1.5 text-texto-suave">Encontre orientações para situações comuns do dia a dia.</p>
              <ul className="mt-5 space-y-2">
                {situacoes.map((s) => (
                  <li key={s.rotulo}>
                    <Link
                      href={s.href}
                      className="group flex min-h-12 items-center gap-3 rounded-campo bg-fundo px-3 py-2 text-marinho no-underline shadow-suave hover:text-azul"
                    >
                      <IconeCirculo icone={s.icone} cor={s.cor} tamanho="sm" />
                      <span className="flex-1 font-titulo text-nota font-semibold group-hover:underline">{s.rotulo}</span>
                      <ArrowRight aria-hidden="true" className="h-4 w-4 text-texto-suave" />
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-right">
                <LinkSeta href="/biblioteca#crises-e-regulacao-sensorial">Ver todas as situações</LinkSeta>
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="titulo-ajuda"
          className="rounded-bloco border border-alerta-borda bg-alerta-bg p-6 sm:p-8"
        >
          <div className="flex items-start gap-4">
            <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-alerta-num">
              <TriangleAlert className="h-6 w-6 text-marinho" strokeWidth={2} />
            </span>
            <div>
              <h2 id="titulo-ajuda" className="text-h2 text-alerta-titulo">Precisa de ajuda agora?</h2>
              <p className="mt-1 text-texto">A criança está em crise ou muito sobrecarregada?</p>
            </div>
          </div>
          <ol className="mt-6 space-y-3">
            {passosAjuda.map((passo, i) => (
              <li key={passo} className="flex items-center gap-3 font-titulo text-nota font-semibold text-marinho">
                <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-alerta-num text-mini font-extrabold">
                  {i + 1}
                </span>
                {passo}
              </li>
            ))}
          </ol>
          <p className="mt-5">
            <Link href="/biblioteca/crise-e-sobrecarga-o-que-fazer" className="font-titulo text-nota font-bold">
              Ver orientação completa
            </Link>
          </p>
          <div className="mt-5 border-t border-alerta-borda pt-4 text-nota">
            <p className="flex items-center gap-2 font-titulo font-bold text-alerta-titulo">
              <TriangleAlert aria-hidden="true" className="h-4.5 w-4.5" />
              Lembre-se:
            </p>
            <p className="mt-1 text-texto">
              Este site não substitui a avaliação ou orientação de profissionais de saúde. Em
              emergência, ligue{" "}
              <a href="tel:192" className="font-bold">SAMU 192</a>. Apoio emocional:{" "}
              <a href="tel:188" className="font-bold">CVV 188</a>.
            </p>
          </div>
        </section>
      </div>

      {/* 5. Dados e curiosidades */}
      <section aria-labelledby="titulo-dados" className="container-pagina mt-14">
        <div className="grid gap-6 rounded-bloco bg-faixa p-6 sm:p-8 lg:grid-cols-[1.5fr_repeat(3,1fr)] lg:items-center lg:gap-0">
          <div className="flex items-center gap-4 lg:pr-6">
            <IconeCirculo icone={IconeDados} cor="azul" tamanho="lg" />
            <div>
              <h2 id="titulo-dados" className="text-h2">Dados e curiosidades</h2>
              <p className="mt-1 text-nota text-texto-suave">
                Informações baseadas em fontes confiáveis para ampliar a compreensão sobre o TEA.
              </p>
            </div>
          </div>
          {atalhosDados.map(({ titulo, texto, href, icone: Icone }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-center gap-3 rounded-card p-3 no-underline hover:bg-fundo lg:rounded-none lg:border-l lg:border-azul-circ lg:px-6"
            >
              <Icone aria-hidden="true" className="h-8 w-8 shrink-0 text-azul-tom" strokeWidth={1.6} />
              <span className="flex-1">
                <span className="block font-titulo text-nota font-bold text-marinho group-hover:underline">{titulo}</span>
                <span className="block text-mini text-texto-suave">{texto}</span>
              </span>
              <SetaCirculo />
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Guias rápidos + Entenda o TEA */}
      <div className="container-pagina mt-14 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <section aria-labelledby="titulo-guias">
          <TituloSecao
            id="titulo-guias"
            titulo="Guias rápidos"
            subtitulo="Materiais práticos para o seu dia a dia."
            icone={<IconeCirculo icone={guias[3].icone} cor="azul" />}
            link={{ href: "/biblioteca", rotulo: "Ver todos os guias" }}
          />
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {guias.map((g) => (
              <li key={g.href}>
                <Link href={g.href} className="card group flex h-full flex-col gap-3 p-4 no-underline hover:shadow-elevada">
                  <span className="flex items-center gap-2.5">
                    <IconeCirculo icone={g.icone} cor={g.cor} tamanho="sm" />
                    <span className="font-titulo text-nota font-bold text-marinho group-hover:underline">{g.titulo}</span>
                  </span>
                  <span className="text-mini text-texto-suave">{g.texto}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <Link
          href="/entenda"
          className="group flex flex-col justify-between rounded-bloco bg-lilas-bg p-6 no-underline sm:p-8"
        >
          <span className="flex items-start gap-4">
            <IconeCirculo icone={Brain} cor="lilas" tamanho="lg" />
            <span>
              <span className="block font-titulo text-h3 font-extrabold text-marinho group-hover:underline">Entenda o TEA</span>
              <span className="mt-1 block text-nota text-texto">
                Informações simples e confiáveis para desmistificar e ampliar o olhar.
              </span>
            </span>
          </span>
          <span className="link-seta mt-6">
            Saiba mais <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </span>
        </Link>
      </div>

      {/* 7. Encontre apoio especializado */}
      <section aria-labelledby="titulo-apoio" className="container-pagina mt-16">
        <TituloSecao
          id="titulo-apoio"
          titulo="Encontre apoio especializado"
          subtitulo="Profissionais e cuidadores que atuam com crianças com TEA em Teresina e região."
          icone={<IconeCirculo icone={Users} cor="azul" tamanho="lg" />}
          link={{ href: "/profissionais", rotulo: "Ver todos os profissionais" }}
        />
        <DiretorioProfissionais
          profissionais={profissionais.filter((p) => especialidadesHome.includes(p.especialidade))}
          filtros={especialidadesHome}
          variante="home"
          limite={5}
        />
        <p className="mt-4 text-mini text-texto-suave">
          Perfis demonstrativos: nomes fictícios e fotos de banco de imagens. Estamos validando os
          profissionais parceiros.
        </p>
      </section>

      {/* 8. Rede de apoio e AMA-PI */}
      <section aria-labelledby="titulo-rede" className="container-pagina mt-14">
        <div className="grid overflow-hidden rounded-bloco bg-verde-bg lg:grid-cols-[1.4fr_0.9fr_auto]">
          <div className="flex items-center gap-5 p-6 sm:p-8">
            <span aria-hidden="true" className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full bg-verde-circ sm:flex">
              <Heart className="h-8 w-8 fill-verde-agua text-verde-tom" strokeWidth={1.6} />
            </span>
            <div>
              <h2 id="titulo-rede" className="text-h2">Rede de apoio e AMA-PI</h2>
              <p className="mt-1.5 text-texto">
                Conheça serviços, iniciativas e canais de atendimento que podem apoiar você e sua
                família em Teresina.
              </p>
            </div>
          </div>
          <div className="relative h-44 lg:h-auto">
            <Image src="/images/rede-de-apoio.jpg" alt="" fill sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover" />
          </div>
          <div className="flex flex-col items-start justify-center gap-4 p-6 sm:p-8">
            <Link href="/rede-de-apoio" className="botao botao-escuro">
              Ver rede de apoio <ArrowRight aria-hidden="true" className="h-4.5 w-4.5" />
            </Link>
            <p className="max-w-52 font-manuscrita text-manuscrito text-azul-escuro">
              Informação também é uma forma de inclusão.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
