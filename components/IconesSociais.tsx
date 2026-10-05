// Ícones de redes sociais (desenhados em SVG, traço simples).
type P = { className?: string };

export function IconeInstagram({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconeYoutube({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <rect x="2" y="5" width="20" height="14" rx="4.5" fill="currentColor" />
      <path d="M10 9.2v5.6l4.8-2.8z" fill="var(--c-marinho-escuro)" />
    </svg>
  );
}

export function IconeSpotify({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <g fill="none" stroke="var(--c-marinho-escuro)" strokeWidth="1.7" strokeLinecap="round">
        <path d="M7 9.3c3.4-1 7.3-.7 10.2.9" />
        <path d="M7.6 12.4c2.8-.8 5.8-.5 8.3.8" />
        <path d="M8.2 15.3c2.2-.6 4.4-.4 6.3.6" />
      </g>
    </svg>
  );
}
