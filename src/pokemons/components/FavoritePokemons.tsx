"use client";

import { IoHeartOutline } from "react-icons/io5";
import { PokemonGrid } from "./PokemonGrid";
import { useAppSelector } from "@/store";
import { useEffect, useState } from "react";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) => state.pokemons.favorites);
  const [pokemons, setPokemons] = useState(Object.values(favoritePokemons));

  useEffect(() => {
    setPokemons(Object.values(favoritePokemons));
  }, [favoritePokemons]);

  return (
    <>
      <span className="text-5xl my-2">
        Listado de Pokemon <small className="text-blue-500">Global state</small>
      </span>
      {!pokemons.length ? (
        <NoFavoritePokemons />
      ) : (
        <PokemonGrid pokemons={pokemons} />
      )}
    </>
  );
};

export const NoFavoritePokemons = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span className="text-2xl my-2">No favorite pokemons</span>
    </div>
  );
};
