// manda el html de la pagina con los pokemons cargados

import { PokemonGrid, PokemonsReponse, SimplePokemon } from "@/pokemons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "List of Pokemons",
  description: "List of Pokemons",
};

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsReponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((response) => response.json());

  return data.results.map((pokemon) => ({
    id: pokemon.url.split("/")[6],
    name: pokemon.name,
  }));
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokemon <small className="text-blue-500">Estatico</small>
      </span>

      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
