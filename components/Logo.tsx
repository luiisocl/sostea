// Logo do SOSTEA: três círculos sobrepostos (azul-marinho, azul-claro e verde-água).
// Representam pessoas diferentes que se encontram — família, escola e rede de apoio.
export function SimboloLogo({ className = "", claro = false }: { className?: string; claro?: boolean }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false" className={className}>
      <circle cx="18" cy="17" r="12" fill={claro ? "#ffffff" : "var(--c-marinho)"} />
      <circle cx="31" cy="20" r="11" fill="var(--c-azul-logo)" fillOpacity="0.92" />
      <circle cx="21" cy="31" r="11" fill="var(--c-verde-agua)" fillOpacity="0.9" />
      <circle cx="18" cy="17" r="4.2" fill={claro ? "var(--c-marinho)" : "#ffffff"} fillOpacity="0.9" />
    </svg>
  );
}

export function Logo({ claro = false }: { claro?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <SimboloLogo className="h-11 w-11 shrink-0" claro={claro} />
      <span className="flex flex-col">
        <span
          className={`font-titulo text-[1.625rem] leading-none font-extrabold tracking-tight ${
            claro ? "text-branco" : "text-marinho"
          }`}
        >
          SOSTEA
        </span>
        <span
          className={`mt-1 font-titulo text-[0.625rem] leading-none font-bold uppercase tracking-[0.14em] ${
            claro ? "text-azul-circ" : "text-azul"
          }`}
        >
          Informação que acolhe
        </span>
      </span>
    </span>
  );
}
