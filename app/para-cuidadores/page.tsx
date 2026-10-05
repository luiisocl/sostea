import type { Metadata } from "next";
import { PaginaPerfil } from "@/components/PaginaPerfil";
import { paginasPerfil } from "@/data/paginas-perfil";

export const metadata: Metadata = {
  title: "Para cuidadores",
  description: "Orientações práticas para cuidadoras e cuidadores de crianças autistas.",
};

export default function ParaCuidadores() {
  return <PaginaPerfil dados={paginasPerfil.cuidadores} />;
}
