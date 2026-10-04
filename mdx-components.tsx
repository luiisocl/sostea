import type { MDXComponents } from "mdx/types";
import Link from "next/link";

// Os estilos dos artigos ficam na classe .artigo (app/globals.css).
const components: MDXComponents = {
  a: ({ href = "", children }) =>
    href.startsWith("/") || href.startsWith("#") ? (
      <Link href={href}>{children}</Link>
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
        <span className="sr-only"> (abre em nova aba)</span>
      </a>
    ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
