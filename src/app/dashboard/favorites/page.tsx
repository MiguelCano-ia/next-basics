// manda el html de la pagina con los pokemons cargados

import { FavoritePokemons } from "@/pokemons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favorites",
  description: "List of Pokemons",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <FavoritePokemons />
    </div>
  );
}
