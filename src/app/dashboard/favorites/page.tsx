// manda el html de la pagina con los pokemons cargados

import { PokemonGrid } from "@/pokemons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favorites",
  description: "List of Pokemons",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokemon <small className="text-blue-500">Global state</small>
      </span>

      <PokemonGrid pokemons={[]} />
    </div>
  );
}
