// Preferências de leitura (reduzir estímulos e tamanho do texto).
// Ficam salvas só no navegador da pessoa (localStorage) e são aplicadas
// como atributos na tag <html>, que o CSS lê em app/globals.css.

export const CHAVE_PREFERENCIAS = "sostea:preferencias";
const EVENTO = "sostea:preferencias";

export type Estimulos = "normais" | "reduzidos";
export type TamanhoTexto = "normal" | "grande" | "maior";

type Preferencias = { estimulos: Estimulos; texto: TamanhoTexto };

// Roda antes da página aparecer, para não "piscar" com as cores erradas.
export const scriptInicial = `(function(){try{var p=JSON.parse(localStorage.getItem("${CHAVE_PREFERENCIAS}")||"{}");var r=document.documentElement;if(p.estimulos==="reduzidos")r.dataset.estimulos="reduzidos";if(p.texto==="grande"||p.texto==="maior")r.dataset.texto=p.texto;}catch(e){}})();`;

function ler(): Preferencias {
  const r = document.documentElement;
  return {
    estimulos: r.dataset.estimulos === "reduzidos" ? "reduzidos" : "normais",
    texto: r.dataset.texto === "grande" || r.dataset.texto === "maior" ? r.dataset.texto : "normal",
  };
}

export function definirPreferencia(parcial: Partial<Preferencias>) {
  const nova = { ...ler(), ...parcial };
  const r = document.documentElement;

  if (nova.estimulos === "reduzidos") r.dataset.estimulos = "reduzidos";
  else delete r.dataset.estimulos;

  if (nova.texto === "normal") delete r.dataset.texto;
  else r.dataset.texto = nova.texto;

  try {
    localStorage.setItem(CHAVE_PREFERENCIAS, JSON.stringify(nova));
  } catch {
    // Navegação privada pode bloquear o armazenamento; a preferência vale só nesta visita.
  }
  window.dispatchEvent(new Event(EVENTO));
}

export function assinar(callback: () => void) {
  window.addEventListener(EVENTO, callback);
  return () => window.removeEventListener(EVENTO, callback);
}

export const lerEstimulos = (): Estimulos => ler().estimulos;
export const lerTexto = (): TamanhoTexto => ler().texto;
