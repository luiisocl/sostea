// Símbolo do SOSTEA: um traço contínuo em forma de laço aberto.
// Lembra um infinito que não se fecha — algo em movimento, sem moldura.
export function Simbolo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 26"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M3 16.5C3 7.5 12.5 5 19 11.5S30.5 22.5 38 21.5 46 9 38.5 5.5 28 8.5 25.5 12" />
    </svg>
  );
}
