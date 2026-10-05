import type { Metadata } from "next";
import { PaginaPerfil } from "@/components/PaginaPerfil";
import { paginasPerfil } from "@/data/paginas-perfil";

export const metadata: Metadata = {
  title: "Para famílias",
  description: "Conteúdos e orientações para mães, pais e famílias de crianças autistas.",
};

export default function ParaFamilias() {
  return <PaginaPerfil dados={paginasPerfil.familias} />;
}
