"use client";

import { Provider } from "react-redux";
import { ReactNode, useEffect } from "react";
import { setFavoritePokemons } from "./pokemons/pokemonSlice";
import { store } from ".";

export const Providers = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const favoritePokemons = JSON.parse(
      localStorage.getItem("favoritePokemons") ?? "{}"
    );
    store.dispatch(setFavoritePokemons(favoritePokemons));
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
