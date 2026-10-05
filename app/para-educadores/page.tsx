import type { Metadata } from "next";
import { PaginaPerfil } from "@/components/PaginaPerfil";
import { paginasPerfil } from "@/data/paginas-perfil";

export const metadata: Metadata = {
  title: "Para educadores",
  description: "Estratégias para professores e equipes escolares na inclusão de estudantes autistas.",
};

export default function ParaEducadores() {
  return <PaginaPerfil dados={paginasPerfil.educadores} />;
}
