import { PokemonCard } from "./PokemonCard";
import { SimplePokemon } from "../interfaces/simple-pokemon";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map(({ id, name }) => (
        <PokemonCard key={id} id={id} name={name} />
      ))}
    </div>
  );
};
